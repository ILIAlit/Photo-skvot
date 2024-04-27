import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { ILikeRepository } from 'src/domain/repositories/like/likeRepository.interface'
import { ResLikeDto } from './dto/res-like.dto'

@Injectable()
export class LikesService {
	constructor(
		@Inject('ILikeRepository') private readonly likeRepository: ILikeRepository
	) {}
	async create(userId: number, postId: number) {
		try {
			let like = await this.likeRepository.isLiked(userId, postId)
			if (like) {
				throw new HttpException(
					'Вы уже оценили этот пост!',
					HttpStatus.BAD_REQUEST
				)
			}
			like = await this.likeRepository.create(userId, postId)
			if (like) {
				return new ResLikeDto(true)
			}
		} catch (error) {
			throw new HttpException('Ошибка создания оценки!', HttpStatus.BAD_REQUEST)
		}
	}

	async getUserLike(userId: number) {
		return this.likeRepository.getUserLike(userId)
	}

	async delete(userId: number, postId: number) {
		try {
			const deleted = await this.likeRepository.delete(userId, postId)
			if (deleted > 0) {
				return new ResLikeDto(false)
			} else {
				throw new HttpException(
					'Ошибка удаления оценки!',
					HttpStatus.BAD_REQUEST
				)
			}
		} catch (error) {
			throw new HttpException('Ошибка удаления оценки!', HttpStatus.BAD_REQUEST)
		}
	}
}
