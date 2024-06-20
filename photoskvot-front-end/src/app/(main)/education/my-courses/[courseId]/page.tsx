'use client'

import { useParams } from 'next/navigation'
interface Props {}

const CourseDetailPage = () => {
	const { courseId } = useParams()
	return <div className='text-primary'>My course {courseId}</div>
}

export default CourseDetailPage
