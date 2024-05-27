import { axiosWithAuth } from '@/api/interceptors'
import { ICreatePostResponse } from '../types/post.types'

class PostService {
	async create(data: FormData) {
		const response = await axiosWithAuth.post<ICreatePostResponse>(
			'posts',
			data
		)
		return response
	}
}

export const postService = new PostService()
