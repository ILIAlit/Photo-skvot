import { Inject, Injectable } from '@nestjs/common'
import { ICommentRepository } from 'src/domain/repositories/comment/commentRepository.interface'
import { CreateCommentDto } from './dto/create-comment.dto'

@Injectable()
export class CommentsService {
	constructor(
		@Inject('ICommentRepository')
		private readonly commentRepository: ICommentRepository
	) {}

	async create(createCommentDto: CreateCommentDto, userId: number) {
		return await this.commentRepository.create(
			userId,
			createCommentDto.postId,
			createCommentDto.text
		)
	}

	async getPostComment(postId: number, limit: number, page: number) {
		return await this.commentRepository.getPostComment(postId, limit, page)
	}

	async delete(commentId: number, userId: number) {
		return await this.commentRepository.delete(userId, commentId)
	}
}
