import { axiosWithAuth } from '@/api/interceptors'
import { ICommentForm } from '@/types/comment.types'

class CommentService {
	async create(data: ICommentForm) {
		const response = await axiosWithAuth.post<ICommentForm>('comments', data)
		return response
	}

	async getPostComment(limit: number, page: number, postId: number) {
		const response = await axiosWithAuth.get('comments/get-post-comment', {
			params: { limit, page, postId },
		})
		return response
	}
}

export const commentService = new CommentService()
