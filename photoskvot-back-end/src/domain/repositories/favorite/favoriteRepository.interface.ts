import { Favorite } from 'src/domain/models/favorite/favorite'
import { ResGetFavoriteDto } from 'src/infrastructure/favorites/dto/res-get-favorite.dto'

export interface IFavoriteRepository {
	create(userId: number, postId: number): Promise<Favorite>
	isFavorite(userId: number, postId: number): Promise<Favorite>
	getUserFavorite(userId: number): Promise<ResGetFavoriteDto[]>
	delete(userId: number, postId: number): Promise<number>
}
