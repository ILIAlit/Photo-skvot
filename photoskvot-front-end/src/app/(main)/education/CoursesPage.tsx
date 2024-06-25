'use client'

import { CoursePreview } from '@/components/education/CoursePreview'
import { GradientButton } from '@/components/UI/buttons/GradientButton'
import { LoaderDot } from '@/components/UI/LoaderDot'
import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { useGetCourses } from '@/hooks/education/useGetCourses'
import { useGetUserCourses } from '@/hooks/education/useGetUserCourses'
import { useRouter } from 'next/navigation'

export default function CoursesPage() {
	const { push } = useRouter()
	const { coursesData, isLoading } = useGetCourses()
	const { userCoursesData, isLoading: userCourseLoad } = useGetUserCourses()

	if (isLoading || userCourseLoad) {
		return <LoaderDot />
	}

	return (
		<div className='h-screen'>
			<div className='text-center flex justify-center mt-8'>
				<span className='text-primary text-1.5xl font-semibold max-w-96'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. 
				</span>
			</div>
			<div className='flex flex-col items-center mt-11'>
				{userCoursesData?.length ? (
					<GradientButton onClick={() => push(PRIVATE_PAGES.MY_COURSES)}>
						Мои курсы
					</GradientButton>
				) : (
					<GradientButton onClick={() => push(PRIVATE_PAGES.MY_COURSES)}>
						Начать обучение
					</GradientButton>
				)}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 pt-16'>
				{coursesData &&
					coursesData.map(course => {
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
