'use client'

import { useGetPostPhoto } from '@/hooks/post/useGetPostPhoto'

interface CardImageProps {
	postId: number
}

export const CardImage = ({ postId }: CardImageProps) => {
	const { photoData, isLoading } = useGetPostPhoto(postId)
	return (
		<img
			src={photoData?.src}
			alt={photoData?.alt}
			className='w-full h-48 object-cover rounded-lg transition-transform transform scale-100 hover:opacity-70'
		/>
	)
}
