import { Comment } from 'src/domain/models/comment/comment'

export interface ICommentRepository {
	create(userId: number, postId: number): Promise<Comment>
	getPostComment(postId: number): Promise<Comment[]>
	delete(userId: number, postId: number): Promise<number>
}
