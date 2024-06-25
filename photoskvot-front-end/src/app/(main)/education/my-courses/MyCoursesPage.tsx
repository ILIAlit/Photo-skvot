'use client'

import { CoursePreview } from '@/components/education/CoursePreview'
import { useGetUserCourses } from '@/hooks/education/useGetUserCourses'
import { useRouter } from 'next/navigation'

export default function MyCoursesPage() {
	const { push } = useRouter()
	const { userCoursesData } = useGetUserCourses()

	return (
		<div className='h-screen'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 pt-16'>
				{userCoursesData &&
					userCoursesData.map(course => {
						const isUserCourse = userCoursesData?.filter(
							userCourse => userCourse.id === course.id
						)
						return (
							<CoursePreview
								key={course.id}
								isUserCourse={!!isUserCourse}
								courseId={course.id}
								title={course.title}
								description={course.description}
								price={course.price}
							/>
						)
					})}
			</div>
		</div>
	)
}
