import { Inject } from '@nestjs/common'
import { Comment } from 'src/domain/models/comment/comment'
import { ICommentRepository } from 'src/domain/repositories/comment/commentRepository.interface'
import { CommentEntity } from './entities/comment.entity'

export class CommentsRepository implements ICommentRepository {
	constructor(
		@Inject('Comment') private readonly comment: typeof CommentEntity
	) {}
	async create(userId: number, postId: number, text: string): Promise<Comment> {
		return await this.comment.create<CommentEntity>({
			user_id: userId,
			post_id: postId,
			text: text,
		})
	}
	async getPostComment(postId: number): Promise<Comment[]> {
		return await this.comment.findAll<CommentEntity>({
			where: {
				post_id: postId,
			},
		})
	}
	async delete(userId: number, postId: number): Promise<number> {
		return await this.comment.destroy<CommentEntity>({
			where: {
				user_id: userId,
				post_id: postId,
			},
		})
	}
}
