import { Favorite } from 'src/domain/models/favorite/favorite'

export interface IFavoriteRepository {
	create(userId: number, postId: number): Promise<Favorite>
	isFavorite(userId: number, postId: number): Promise<Favorite>
	getUserFavorite(userId: number): Promise<Favorite[]>
	delete(userId: number, postId: number): Promise<number>
}
