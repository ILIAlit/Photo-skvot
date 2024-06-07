'use client'

interface TagItemProps {
	text: string
}

export const TagItem = ({ text }: TagItemProps) => {
	return (
		<a className=' relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 '>
			<span className='text-sm'>{text}</span>
		</a>
	)
}
