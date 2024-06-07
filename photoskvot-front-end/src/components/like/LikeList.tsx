'use client'

import { useGetUserLike } from '@/hooks/like/useGetUserLike'
import { Card } from '../UI/card/Card'

interface LikeListProps {}

export const LikeList = ({}: LikeListProps) => {
	const { data: postsData, isLoading } = useGetUserLike()

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
			{postsData &&
				postsData.map(({ post }) => {
					return (
						<Card
							postId={Number(post.id)}
							key={post.id}
							userId={post.user_id}
						/>
					)
				})}
		</div>
	)
}
