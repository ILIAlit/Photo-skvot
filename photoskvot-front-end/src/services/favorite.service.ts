import { axiosWithAuth } from '@/api/interceptors'
import {
	IFavoriteForm,
	IFavoriteResponse,
	IGetFavoriteResponse,
} from '@/types/favorite.types'

class FavoriteService {
	async save(postId: number) {
		const response = await axiosWithAuth.post<IFavoriteForm, IFavoriteResponse>(
			'favorites',
			{
				postId,
			}
		)
		return response
	}

	async deleteSave(postId: number) {
		const response = await axiosWithAuth.delete<any, IFavoriteResponse>(
			'favorites',
			{
				params: { postId },
			}
		)
		return response
	}

	async checkIsFavorite(postId: number) {
		const { data } = await axiosWithAuth.get('favorites/check', {
			params: { postId },
		})
		const favorite: IGetFavoriteResponse = data
		return favorite
	}
}

export const favoriteService = new FavoriteService()
