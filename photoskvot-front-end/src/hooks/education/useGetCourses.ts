import { educationService } from '@/services/education.service'
import { useQuery } from '@tanstack/react-query'

export function useGetCourses() {
	const { data, isLoading } = useQuery({
		queryKey: ['get-courses'],
		queryFn: () => educationService.getCourses(),
	})
	const coursesData: any[] = data?.data
	return { coursesData, isLoading }
}
