import { tagService } from '@/services/tag.service'
import { ITag } from '@/types/tag.types'
import { useQuery } from '@tanstack/react-query'

export function useGetPostTags(postId: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['get-post-tags'],
		queryFn: () => tagService.getPostTags(postId),
	})
	const postTags: ITag[] = data?.data
	return { postTags, isLoading }
}
