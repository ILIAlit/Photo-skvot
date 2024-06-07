import { postService } from '@/services/post.service'
import { IPost } from '@/types/post.types'
import { useQuery } from '@tanstack/react-query'

export function useGetOnePost(postId: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-one-post' + postId],
		queryFn: () => postService.getOnePost(postId),
	})
	const postData: IPost = data?.data
	return { postData, isLoading }
}
