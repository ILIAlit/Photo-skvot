import { Comment } from 'src/domain/models/comment/comment'

export interface ICommentRepository {
	create(userId: number, postId: number, text: string): Promise<Comment>
	getPostComment(
		postId: number,
		limit: number,
		page: number
	): Promise<Comment[]>
	delete(userId: number, postId: number): Promise<number>
}
