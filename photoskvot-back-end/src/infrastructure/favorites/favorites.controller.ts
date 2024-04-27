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
import { IGetUserAuthInfoRequest } from '../../domain/adapters/user/iGetUserAuthInfoRequest.interface'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateFavoriteDto } from './dto/create-favorite.dto'
import { FavoritesService } from './favorites.service'

@Controller('favorites')
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	async create(
		@Body() createFavoriteDto: CreateFavoriteDto,
		@Req() request: IGetUserAuthInfoRequest
	) {
		const postId = createFavoriteDto.postId
		const user = await request.user
		const userId = user.id
		return this.favoritesService.create(postId, userId)
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getUserFavorite(@Req() request: IGetUserAuthInfoRequest) {
		const user = await request.user
		const userId = user.id
		return this.favoritesService.getUserFavorite(userId)
	}

	@UseGuards(JwtAuthGuard)
	@Delete()
	async delete(@Query() { postId }, @Req() request: IGetUserAuthInfoRequest) {
		const user = await request.user
		const userId = user.id
		return this.favoritesService.delete(userId, postId)
	}
}
