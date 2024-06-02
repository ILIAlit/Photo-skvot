import { postService } from '@/services/post.service'
import { IPost } from '@/types/post.types'
import { useQuery } from '@tanstack/react-query'

export function usePosts(limit: number, page: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getPosts(limit, page),
	})
	const postsData: IPost[] = data?.data
	return { postsData, isLoading }
}
