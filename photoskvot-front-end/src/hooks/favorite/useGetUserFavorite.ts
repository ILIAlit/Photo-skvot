import { favoriteService } from '@/services/favorite.service'
import { useQuery } from '@tanstack/react-query'

export function useGetUserFavorite() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-like'],
		queryFn: () => favoriteService.getUserFavorite(),
	})
	return { data, isLoading }
}
