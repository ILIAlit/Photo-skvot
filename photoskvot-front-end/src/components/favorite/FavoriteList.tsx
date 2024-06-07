'use client'

import { useGetUserFavorite } from '@/hooks/favorite/useGetUserFavorite'
import { Card } from '../UI/card/Card'

interface FavoriteListProps {}

export const FavoriteList = ({}: FavoriteListProps) => {
	const { data: postsData, isLoading } = useGetUserFavorite()

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
