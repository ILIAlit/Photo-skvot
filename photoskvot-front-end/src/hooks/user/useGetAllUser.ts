import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useGetAllUser() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-all-user'],
		queryFn: () => userService.getAllUser(),
	})
	const users = data?.data
	return { users, isLoading }
}
