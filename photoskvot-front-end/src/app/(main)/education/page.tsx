'use client'

import { CoursePreview } from '@/components/education/CoursePreview'
import { GradientButton } from '@/components/UI/buttons/GradientButton'
import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { useGetCourses } from '@/hooks/education/useGetCourses'
import { observer } from 'mobx-react'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	const { push } = useRouter()
	const { coursesData, isLoading } = useGetCourses()

	return (
		<div className='h-screen'>
			<div className='text-center flex justify-center mt-8'>
				<span className='text-primary text-1.5xl font-semibold max-w-96'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. 
				</span>
			</div>
			<div className='flex flex-col items-center mt-11'>
				<GradientButton onClick={() => push(PRIVATE_PAGES.MY_COURSES)}>
					Начать обучение
				</GradientButton>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 pt-16'>
				{coursesData &&
					coursesData.map(course => (
						<CoursePreview
							title={course.title}
							description={course.description}
							price={course.price}
						/>
					))}
				{coursesData &&
					coursesData.map(course => (
						<CoursePreview
							title={course.title}
							description={course.description}
							price={course.price}
						/>
					))}
			</div>
		</div>
	)
})

export default Page
