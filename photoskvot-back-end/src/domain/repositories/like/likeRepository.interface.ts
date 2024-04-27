import { Like } from 'src/domain/models/like/like'
import { ResGetLikeDto } from 'src/infrastructure/likes/dto/res-get-like.dto'

export interface ILikeRepository {
	create(userId: number, postId: number): Promise<Like>
	isLiked(userId: number, postId: number): Promise<Like>
	getUserLike(userId: number): Promise<ResGetLikeDto[]>
	delete(userId: number, postId: number): Promise<number>
}
