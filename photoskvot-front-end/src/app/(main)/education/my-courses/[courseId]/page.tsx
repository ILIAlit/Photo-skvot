'use client'

import { useParams } from 'next/navigation'
import MyCourseDetail from './MyCourseDetail'
interface Props {}

const CourseDetailPage = () => {
	const { courseId } = useParams()
	return <MyCourseDetail courseId={+courseId} />
}

export default CourseDetailPage
