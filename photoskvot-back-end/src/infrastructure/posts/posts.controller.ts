import {
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	Query,
	Req,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import {
	ApiConsumes,
	ApiOperation,
	ApiQuery,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Post as PostModel } from '../../domain/models/post/post'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { FileRequiredValidationPipe } from '../common/pipes/validation/file-required-validation.pipe'
import { ImgFileTypeValidationPipe } from '../common/pipes/validation/img-file-type-validation.pipe'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { FindAllQuery } from './dto/find-all-query.dto'
import { ReqPostDto } from './dto/req-post.dto'
import { RequestQueryDto } from './dto/request-query.dto'
import { ResPostDto } from './dto/res-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostsService } from './posts.service'

@ApiTags('Post')
@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@ApiOperation({ summary: 'Create new post' })
	@ApiConsumes('multipart/form-data')
	@ApiResponse({ status: 200, type: ResPostDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	async create(
		@Req() request: IGetUserAuthInfoRequest,
		@Body() reqPostDto: ReqPostDto,
		@UploadedFile(
			new FileRequiredValidationPipe(),
			new ImgFileTypeValidationPipe()
		)
		image: any
	): Promise<ResPostDto> {
		const user = await request.user
		const userId = user.id
		return await this.postsService.create(reqPostDto, image, userId, user)
	}

	@ApiOperation({ summary: 'Get all posts' })
	@ApiResponse({ status: 200, type: [PostModel] })
	@ApiQuery({ name: 'limit' })
	@ApiQuery({ name: 'offset' })
	@Get()
	findAll(@Query() { limit, offset }: FindAllQuery): Promise<PostModel[]> {
		return this.postsService.findAll(offset, limit)
	}

	@ApiOperation({ summary: 'Get one post' })
	@ApiResponse({ status: 200, type: PostModel })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@Get('get-one')
	findOne(@Query() { postId }: RequestQueryDto): Promise<PostModel> {
		return this.postsService.findOne(+postId)
	}

	@ApiOperation({ summary: 'Update post' })
	@ApiConsumes('multipart/form-data')
	@ApiResponse({ status: 200, type: ResPostDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Patch()
	@UseInterceptors(FileInterceptor('image'))
	update(
		@Query() { postId }: RequestQueryDto,
		@Body() updatePostDto: UpdatePostDto,
		@UploadedFile(
			new FileRequiredValidationPipe(),
			new ImgFileTypeValidationPipe()
		)
		image: any
	): Promise<ResPostDto> {
		return this.postsService.update(+postId, updatePostDto, image)
	}

	@ApiOperation({ summary: 'Delete post' })
	@ApiResponse({ status: 200 })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Delete()
	remove(@Query() { postId }: RequestQueryDto): Promise<void> {
		return this.postsService.remove(+postId)
	}
}
