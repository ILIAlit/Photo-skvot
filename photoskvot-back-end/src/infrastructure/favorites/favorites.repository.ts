import { Inject } from '@nestjs/common'
import { Favorite } from 'src/domain/models/favorite/favorite'
import { IFavoriteRepository } from 'src/domain/repositories/favorite/favoriteRepository.interface'
import { PostEntity } from '../posts/entities/post.entity'
import { ResGetFavoriteDto } from './dto/res-get-favorite.dto'
import { FavoriteEntity } from './entities/favorite.entity'

export class FavoriteRepository implements IFavoriteRepository {
	constructor(
		@Inject('Favorite') private readonly favorite: typeof FavoriteEntity
	) {}
	async create(userId: number, postId: number): Promise<Favorite> {
		return await this.favorite.create<FavoriteEntity>({
			user_id: userId,
			post_id: postId,
		})
	}
	async delete(userId: number, postId: number): Promise<number> {
		return await this.favorite.destroy<FavoriteEntity>({
			where: {
				user_id: userId,
				post_id: postId,
			},
		})
	}
	async isFavorite(userId: number, postId: number): Promise<Favorite> {
		return await this.favorite.findOne<FavoriteEntity>({
			where: {
				user_id: userId,
				post_id: postId,
			},
		})
	}
	async getUserFavorite(userId: number): Promise<ResGetFavoriteDto[]> {
		return await this.favorite.findAll<FavoriteEntity>({
			include: [PostEntity],
			where: {
				user_id: userId,
			},
		})
	}
}
