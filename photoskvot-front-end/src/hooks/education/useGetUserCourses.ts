import { educationService } from '@/services/education.service'
import { useQuery } from '@tanstack/react-query'

export function useGetUserCourses() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-user-courses'],
		queryFn: () => educationService.getUserCourses(),
	})
	const userCoursesData: any[] = data?.data
	return { userCoursesData, isLoading }
}
