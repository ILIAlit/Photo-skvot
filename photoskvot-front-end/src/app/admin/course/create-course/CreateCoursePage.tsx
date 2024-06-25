'use client'

import { useRouter } from 'next/navigation'

export default function CreateCoursePage() {
	const { push } = useRouter()

	return (
		<div className='p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full'>
			Create course
		</div>
	)
}
