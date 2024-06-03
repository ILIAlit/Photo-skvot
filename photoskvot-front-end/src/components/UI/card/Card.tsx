'use client'

import { LikeButton } from '../buttons/LIkeButton'
import { SaveButton } from '../buttons/SaveButton'
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
					<SaveButton postId={postId} />
				</div>
			</div>
		</div>
	)
}
