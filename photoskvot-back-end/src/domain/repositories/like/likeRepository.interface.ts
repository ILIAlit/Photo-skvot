import { Like } from 'src/domain/models/like/like'

export interface ILikeRepository {
	create(userId: number, postId: number): Promise<Like>
	isLiked(userId: number, postId: number): Promise<Like>
	getUserLike(userId: number): Promise<Like[]>
	delete(userId: number, postId: number): Promise<number>
}
