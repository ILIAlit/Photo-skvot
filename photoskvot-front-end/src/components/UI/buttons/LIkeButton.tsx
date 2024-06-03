'use client'

import { likeService } from '@/services/like.service'
import UserStore from '@/stores/UserStore'
import { useMutation } from '@tanstack/react-query'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Loader } from '../Loader'

interface LikeButtonProps {
	disabled?: boolean
	loading?: boolean
	styles?: string
	isLoad?: boolean
	postId: number
	onClick?: () => void
}

export function LikeButton({
	styles,
	isLoad,
	onClick,
	postId,
}: LikeButtonProps) {
	const [isLike, setIsLike] = useState(false)

	const isAuth = UserStore.isUserAuth

	useEffect(() => {
		if (isAuth) {
			likeCheck()
		}
	}, [])

	const likeCheck = async () => {
		const like = await likeService.checkIsLike(postId)
		if (like) {
			setIsLike(true)
			return true
		}
	}

	const { mutate: createLikeMutation } = useMutation({
		mutationKey: ['create-like'],
		mutationFn: (postId: number) => likeService.like(postId),
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const { mutate: deleteLikeMutation } = useMutation({
		mutationKey: ['delete-like'],
		mutationFn: (postId: number) => likeService.deleteLike(postId),
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const handleClick = () => {
		onClick
		if (isAuth) {
			setIsLike(!isLike)
		}
	}

	const createLike = () => {
		createLikeMutation(postId)
	}

	const deleteLike = () => {
		deleteLikeMutation(postId)
	}

	return (
		<button disabled={isLoad} onClick={handleClick}>
			<div className='flex gap-2'>
				{isLoad && <Loader />}
				{isLike ? (
					<Heart onClick={deleteLike} className='text-primary fill-primary' />
				) : (
					<Heart onClick={createLike} className='text-primary' />
				)}
			</div>
		</button>
	)
}
