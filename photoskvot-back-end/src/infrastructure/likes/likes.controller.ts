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
import { Like } from 'src/domain/models/like/like'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { CreateLikeDto } from './dto/create-like.dto'
import { ReqQueryDto } from './dto/req-query.dto'
import { ResGetLikeDto } from './dto/res-get-like.dto'
import { ResLikeDto } from './dto/res-like.dto'
import { LikesService } from './likes.service'

@ApiTags('Like')
@Controller('likes')
export class LikesController {
	constructor(private readonly likesService: LikesService) {}

	@ApiOperation({ summary: 'Create like' })
	@ApiResponse({ status: 200, type: ResLikeDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Post()
	async create(
		@Req() request: IGetUserAuthInfoRequest,
		@Body() dto: CreateLikeDto
	) {
		const user = await request.user
		const userId = user.id
		const postId = dto.postId
		return this.likesService.create(userId, postId)
	}

	@ApiOperation({ summary: 'Get user like' })
	@ApiResponse({ status: 200, type: ResGetLikeDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Get()
	async getUserLike(
		@Req() request: IGetUserAuthInfoRequest
	): Promise<ResGetLikeDto[]> {
		const user = await request.user
		const userId = user.id
		return this.likesService.getUserLike(userId)
	}

	@ApiOperation({ summary: 'Check is like' })
	@ApiResponse({ status: 200, type: ResGetLikeDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Get('check')
	async checkIsLike(
		@Req() request: IGetUserAuthInfoRequest,
		@Query() { postId }: ReqQueryDto
	): Promise<Like> {
		const user = await request.user
		const userId = user.id
		return this.likesService.checkIsLike(userId, postId)
	}

	@ApiOperation({ summary: 'Delete like' })
	@ApiResponse({ status: 200, type: ResLikeDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Delete()
	async delete(
		@Req() request: IGetUserAuthInfoRequest,
		@Query() { postId }: ReqQueryDto
	) {
		const user = await request.user
		const userId = user.id
		return this.likesService.delete(userId, postId)
	}
}
