'use client'

import { useParams } from 'next/navigation'
import PostPreview from './PostPreview'
interface Props {}

const ShowPage = () => {
	const { postId } = useParams()
	return <PostPreview postId={Number(postId)} />
}

export default ShowPage
