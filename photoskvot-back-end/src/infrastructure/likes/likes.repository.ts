import { Inject } from '@nestjs/common'
import { Like } from 'src/domain/models/like/like'
import { Post } from 'src/domain/models/post/post'
import { ILikeRepository } from 'src/domain/repositories/like/likeRepository.interface'
import { ResLikeDto } from './dto/res-like.dto'
import { LikeEntity } from './entities/like.entity'
import { PostEntity } from '../posts/entities/post.entity'

export class LikeRepository implements ILikeRepository {
	constructor(@Inject('Like') private readonly like: typeof LikeEntity) {}
	async isLiked(userId: number, postId: number): Promise<Like> {
		return await this.like.findOne<LikeEntity>({
			where: {
				user_id: userId,
				post_id: postId,
			},
		})
	}
	async getUserLike(userId: number): Promise<Like[]> {
		return await this.like.findAll<LikeEntity>({
			include: [PostEntity],
			where: {
				user_id: userId,
			},
		})
	}
	async create(userId: number, postId: number): Promise<Like> {
		return await this.like.create<LikeEntity>({
			user_id: userId,
			post_id: postId,
		})
	}
	async delete(userId: number, postId: number): Promise<number> {
		return await this.like.destroy<LikeEntity>({
			where: {
				user_id: userId,
				post_id: postId,
			},
		})
	}
}
