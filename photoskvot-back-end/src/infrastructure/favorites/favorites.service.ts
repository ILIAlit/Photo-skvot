import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { IFavoriteRepository } from 'src/domain/repositories/favorite/favoriteRepository.interface'
import { ResFavoriteDto } from './dto/res-favorite.dto'

@Injectable()
export class FavoritesService {
	constructor(
		@Inject('IFavoriteRepository')
		private readonly favoriteRepository: IFavoriteRepository
	) {}
	async create(postId: number, userId: number) {
		let favorite = await this.favoriteRepository.isFavorite(userId, postId)
		if (favorite) {
			throw new HttpException(
				'Вы уже добавили этот пост в избранное!',
				HttpStatus.BAD_REQUEST
			)
		}
		favorite = await this.favoriteRepository.create(userId, postId)
		if (favorite) {
			return new ResFavoriteDto(true)
		}
	}

	async checkIsFavorite(userId: number, postId: number) {
		return await this.favoriteRepository.isFavorite(userId, postId)
	}

	async getUserFavorite(userId: number) {
		return await this.favoriteRepository.getUserFavorite(userId)
	}

	async delete(userId: number, postId: number) {
		const favorite = await this.favoriteRepository.delete(userId, postId)
		if (favorite > 0) {
			return new ResFavoriteDto(false)
		} else {
			throw new HttpException(
				'Ошибка удаления избранного!',
				HttpStatus.BAD_REQUEST
			)
		}
	}
}
