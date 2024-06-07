import { commentService } from '@/services/comment.service'
import { IComment } from '@/types/comment.types'
import { useQuery } from '@tanstack/react-query'

export function useGetPostComment(
	postId: number,
	limit: number = 10,
	page: number = 0
) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-post-comment' + postId],
		queryFn: () => commentService.getPostComment(limit, page, postId),
	})
	const commentData: IComment[] = data?.data
	return { commentData, isLoading }
}
