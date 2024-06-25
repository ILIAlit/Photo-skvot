'use client'

import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { useGetCourses } from '@/hooks/education/useGetCourses'
import { useRouter } from 'next/navigation'
import { Button, ButtonVariant } from '../UI/buttons/Button'

interface CoursesListProps {}

export const CoursesList = ({}: CoursesListProps) => {
	const { push } = useRouter()
	const { coursesData, isLoading } = useGetCourses()

	return (
		<div className='shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10'>
			<Button
				styles='mb-4 max-w-48'
				onClick={() => push(PRIVATE_PAGES.CREATE_COURSE)}
				variant={ButtonVariant.contained}
			>
				Создать курс
			</Button>
			<table className='w-full table-fixed'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Название
						</th>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Цена
						</th>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Удалить
						</th>
					</tr>
				</thead>
				<tbody className='bg-white'>
					{coursesData &&
						coursesData.map(course => {
							return (
								<tr>
									<td className='py-4 px-6 border-b border-gray-200'>
										{course.title}
									</td>
									<td className='py-4 px-6 border-b border-gray-200 truncate'>
										{course.price}
									</td>
									<td className='py-4 px-6 border-b border-gray-200'>
										Удалить
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}
