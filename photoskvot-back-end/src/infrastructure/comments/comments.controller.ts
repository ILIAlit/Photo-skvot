import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { Comment } from 'src/domain/models/comment/comment'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { DeleteQueryDto } from './dto/delete-query.dto'
import { ReqQueryDto } from './dto/req-query.dto'

@ApiTags('Comment')
@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@ApiOperation({ summary: 'Create comment' })
	@ApiResponse({ status: 200, type: Comment })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Post()
	async create(
		@Req() request: IGetUserAuthInfoRequest,
		@Body() createCommentDto: CreateCommentDto
	) {
		const user = await request.user
		const userId = user.id
		return await this.commentsService.create(createCommentDto, userId)
	}

	@ApiOperation({ summary: 'Get post comment' })
	@ApiResponse({ status: 200, type: [Comment] })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@ApiQuery({ name: 'page' })
	@ApiQuery({ name: 'limit' })
	@Get('get-post-comment')
	async getPostComment(@Query() { limit, page, postId }: ReqQueryDto) {
		return await this.commentsService.getPostComment(postId, limit, page)
	}

	@ApiOperation({ summary: 'Delete comment' })
	@ApiResponse({ status: 200, type: Number })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@ApiQuery({ name: 'commentId' })
	@Delete()
	async remove(
		@Req() request: IGetUserAuthInfoRequest,
		@Query() { commentId }: DeleteQueryDto
	) {
		const user = await request.user
		const userId = user.id
		return await this.commentsService.delete(commentId, userId)
	}
}
