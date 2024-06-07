import { axiosClassic } from '@/api/interceptors'

class TagService {
	async getPostTags(postId: number) {
		const response = await axiosClassic.get('tags/get-post-tags', {
			params: { postId },
		})
		return response
	}
}

export const tagService = new TagService()
