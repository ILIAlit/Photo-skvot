import { axiosClassic } from '@/api/interceptors'

class PhotoService {
	async getPostPhoto(postId: number) {
		const response = await axiosClassic.get('photos/get-one', {
			params: { postId },
		})
		return response
	}
}

export const photoService = new PhotoService()
