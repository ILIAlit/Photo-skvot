import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useUserData(userId: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['user-data' + userId],
		queryFn: () => userService.getUserData(userId),
	})
	const userData = data?.data
	return { userData, isLoading }
}
