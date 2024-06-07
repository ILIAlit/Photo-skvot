import { likeService } from '@/services/like.service'
import { useQuery } from '@tanstack/react-query'

export function useGetUserLike() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-like'],
		queryFn: () => likeService.getUserLike(),
	})
	return { data, isLoading }
}
