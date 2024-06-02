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
import { Favorite } from 'src/domain/models/favorite/favorite'
import { IGetUserAuthInfoRequest } from '../../domain/adapters/user/iGetUserAuthInfoRequest.interface'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { CreateFavoriteDto } from './dto/create-favorite.dto'
import { ReqQueryDto } from './dto/req-query.dto'
import { ResFavoriteDto } from './dto/res-favorite.dto'
import { ResGetFavoriteDto } from './dto/res-get-favorite.dto'
import { FavoritesService } from './favorites.service'

@ApiTags('Favorite')
@Controller('favorites')
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@ApiOperation({ summary: 'Create favorite' })
	@ApiResponse({ status: 200, type: ResFavoriteDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
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

	@ApiOperation({ summary: 'Get user favorite' })
	@ApiResponse({ status: 200, type: ResGetFavoriteDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Get()
	async getUserFavorite(
		@Req() request: IGetUserAuthInfoRequest
	): Promise<ResGetFavoriteDto[]> {
		const user = await request.user
		const userId = user.id
		return this.favoritesService.getUserFavorite(userId)
	}

	@ApiOperation({ summary: 'Check is favorite' })
	@ApiResponse({ status: 200, type: ResGetFavoriteDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Get('check')
	async checkIsFavorite(
		@Req() request: IGetUserAuthInfoRequest,
		@Query() { postId }: ReqQueryDto
	): Promise<Favorite> {
		const user = await request.user
		const userId = user.id
		return this.favoritesService.checkIsFavorite(userId, postId)
	}

	@ApiOperation({ summary: 'Delete favorite' })
	@ApiResponse({ status: 200, type: ResFavoriteDto })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@UseGuards(JwtAuthGuard)
	@Delete()
	async delete(
		@Query() { postId }: ReqQueryDto,
		@Req() request: IGetUserAuthInfoRequest
	) {
		const user = await request.user
		const userId = user.id
		return this.favoritesService.delete(userId, postId)
	}
}
