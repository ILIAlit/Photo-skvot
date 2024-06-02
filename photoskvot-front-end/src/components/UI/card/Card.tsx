'use client'

import { Pin, ThumbsUp } from 'lucide-react'
import { CardAuthor } from './CardAuthor'
import { CardImage } from './CardImage'

interface CardProps {
	postId: number
	userId: number
}

export const Card = ({ postId, userId }: CardProps) => {
	return (
		<div className='group cursor-pointer flex flex-col gap-2'>
			<CardImage postId={postId} />
			<div className='flex justify-between'>
				<CardAuthor userId={userId} />
				<div className='flex gap-4'>
					<ThumbsUp className='text-primary' />
					<Pin className='text-primary' />
				</div>
			</div>
		</div>
	)
}
