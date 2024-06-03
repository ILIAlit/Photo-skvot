'use client'

import { Pin } from 'lucide-react'
import { LikeButton } from '../buttons/LIkeButton'
import { CardAuthor } from './CardAuthor'
import { CardImage } from './CardImage'

interface CardProps {
	postId: number
	userId: number
}

export const Card = ({ postId, userId }: CardProps) => {
	return (
		<div className='group flex flex-col gap-2'>
			<CardImage postId={postId} />
			<div className='flex justify-between'>
				<CardAuthor userId={userId} />
				<div className='flex gap-4'>
					<LikeButton postId={postId} />
					<Pin className='text-primary' />
				</div>
			</div>
		</div>
	)
}
