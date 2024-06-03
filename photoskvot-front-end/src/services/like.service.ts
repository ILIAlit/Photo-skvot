import { axiosWithAuth } from '@/api/interceptors'
import { IGetLikeResponse, ILikeForm, ILikeResponse } from '@/types/like.types'

class LikeService {
	async like(postId: number) {
		const response = await axiosWithAuth.post<ILikeForm, ILikeResponse>(
			'likes',
			{
				postId,
			}
		)
		return response
	}

	async deleteLike(postId: number) {
		const response = await axiosWithAuth.delete<any, ILikeResponse>('likes', {
			params: { postId },
		})
		return response
	}

	async checkIsLike(postId: number) {
		const { data } = await axiosWithAuth.get('likes/check', {
			params: { postId },
		})
		const like: IGetLikeResponse = data
		return like
	}
}

export const likeService = new LikeService()
