import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { ICreatePostResponse } from '../types/post.types'

class PhotoService {
	async getPostPhoto(postId: number) {
		const response = await axiosClassic.get('photos/get-one', {
			params: { postId },
		})
		return response
	}
}

export const photoService = new PhotoService()
