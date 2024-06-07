'use client'

import { useGetPostTags } from '@/hooks/post/useGetPostTags'
import { TagItem } from './TagItem'

interface TagListProps {
	postId: number
}

export const TagList = ({ postId }: TagListProps) => {
	const { postTags, isLoading } = useGetPostTags(postId)
	console.log(postTags)

	return (
		<>
			{postTags?.length && (
				<div className='flex flex-wrap items-start justify-center p-5 py-10'>
					{postTags &&
						postTags.map(tag => {
							return <TagItem text={tag.type} key={tag.id} />
						})}
				</div>
			)}
		</>
	)
}
