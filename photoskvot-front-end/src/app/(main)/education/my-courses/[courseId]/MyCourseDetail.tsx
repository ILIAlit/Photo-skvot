'use client'

import { useRouter } from 'next/navigation'

interface MyCourseDetailProps {
	courseId: number
}

export default function MyCourseDetail({ courseId }: MyCourseDetailProps) {
	const { push } = useRouter()

	return <div>{courseId}</div>
}
