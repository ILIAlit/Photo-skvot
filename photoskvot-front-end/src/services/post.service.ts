import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { ICreatePostResponse } from '../types/post.types'

class PostService {
	async create(data: FormData) {
		const response = await axiosWithAuth.post<ICreatePostResponse>(
			'posts',
			data
		)
		return response
	}

	async getPosts(limit: number, page: number) {
		const response = await axiosClassic.get('posts', {
			params: { limit: limit, offset: page },
		})
		return response
	}

	async getOnePost(postId: number) {
		const response = await axiosClassic.get('posts/get-one', {
			params: { postId },
		})
		return response
	}
}

export const postService = new PostService()
