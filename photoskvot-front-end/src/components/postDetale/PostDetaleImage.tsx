'use client'

import { useGetPostPhoto } from '@/hooks/post/useGetPostPhoto'

interface ShowUserDataProps {
	postId: number
}

export default function PostDetailImage({ postId }: ShowUserDataProps) {
	const { photoData, isLoading } = useGetPostPhoto(postId)
	console.log(postId, 'photoData')

	return (
		<img
			src={photoData?.src}
			alt={photoData?.alt}
			className='w-full h-auto mb-8'
		/>
	)
}
