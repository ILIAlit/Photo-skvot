'use client'

import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useGetPostPhoto } from '@/hooks/post/useGetPostPhoto'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CardImageProps {
	postId: number
}

export const CardImage = ({ postId }: CardImageProps) => {
	const { photoData, isLoading } = useGetPostPhoto(postId)

	const { push } = useRouter()
	return (
		<Image
			onClick={() => push(PUBLIC_PAGES.PREVIEW_POST + postId)}
			src={photoData?.src}
			width={600}
			height={400}
			alt={photoData?.alt}
			className='cursor-pointer w-full h-48 object-cover rounded-lg transition-transform transform scale-100 hover:opacity-70'
		/>
	)
}
