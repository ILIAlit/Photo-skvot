import {
	Body,
	Controller,
	Delete,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common'
import { IGetUserAuthInfoRequest } from 'src/domain/adapters/user/IGetUserAuthInfoRequest.interface'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateLikeDto } from './dto/create-like.dto'
import { ReqQueryDto } from './dto/req-query.dto'
import { LikesService } from './likes.service'

@Controller('likes')
export class LikesController {
	constructor(private readonly likesService: LikesService) {}

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

	@UseGuards(JwtAuthGuard)
	@Delete()
	async remove(
		@Req() request: IGetUserAuthInfoRequest,
		@Query() { postId }: ReqQueryDto
	) {
		const user = await request.user
		const userId = user.id
		return this.likesService.delete(userId, postId)
	}
}
