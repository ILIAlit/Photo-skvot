'use client'

import { Card } from '@/components/UI/card/Card'
import { observer } from 'mobx-react'
import { NextPage } from 'next'
import { usePosts } from '../../hooks/post/usePosts'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	const { postsData, isLoading } = usePosts(10, 0)
	//console.log(postsData)

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
			{postsData &&
				postsData.map(post => {
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
})

export default Page
