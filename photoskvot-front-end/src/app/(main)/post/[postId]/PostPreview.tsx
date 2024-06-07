'use client'

import { CommentList } from '@/components/comment/CommentList'
import PostDetailImage from '@/components/postDetale/PostDetaleImage'
import { TagList } from '@/components/UI/tags/TagList'
import { useGetOnePost } from '@/hooks/post/useGetOnePost'
import { useUserData } from '@/hooks/user/useUserData'

interface ShowUserDataProps {
	postId: number
}

export default function PostPreview({ postId }: ShowUserDataProps) {
	const { postData, isLoading } = useGetOnePost(postId)
	const { userData, isLoading: userDataLad } = useUserData(postData?.user_id)
	console.log(postId)
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl mx-auto'>
				<div className='py-8'>
					<h1 className='text-3xl text-primary font-bold mb-2'>
						{postData?.title}
					</h1>
					<p className='text-gray-500 text-sm'>{userData?.name}</p>
				</div>

				<PostDetailImage postId={postId} />

				<div className='prose prose-sm sm:prose text-primary lg:prose-lg xl:prose-xl mx-auto'>
					<p>{postData?.description}</p>
				</div>
			</div>
			<TagList postId={postId} />
			<CommentList />
		</div>
	)
}
