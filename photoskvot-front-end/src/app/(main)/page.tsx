'use client'

import { Card } from '@/components/UI/card/Card'
import { LoaderDot } from '@/components/UI/LoaderDot'
import { observer } from 'mobx-react'
import { NextPage } from 'next'
import { usePosts } from '../../hooks/post/usePosts'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	const { postsData, isLoading } = usePosts(40, 0)
	//console.log(postsData)

	if (isLoading) {
		return <LoaderDot />
	}

	return (
		<>
			<div
				style={{
					margin: '-1.25rem',
					marginTop: '-3rem',
					marginBottom: '40px',
					background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
					backgroundImage:
						"url('https://images.unsplash.com/photo-1684487747385-442d674962f2')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				className='py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto'
			>
				<h1 className='pb-4'>Search for product</h1>
				<div className='w-11/12 md:w-3/4 lg:max-w-3xl m-auto'>
					<div className='relative z-30 text-base text-black'>
						<input
							type='text'
							value=''
							placeholder='Keyword'
							className='mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full'
						/>
						<div className='text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto'></div>
					</div>
				</div>
			</div>
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
		</>
	)
})

export default Page
