'use client'

import { favoriteService } from '@/services/favorite.service'
import UserStore from '@/stores/UserStore'
import { useMutation } from '@tanstack/react-query'
import { Pin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Loader } from '../Loader'

interface SaveButtonProps {
	disabled?: boolean
	loading?: boolean
	styles?: string
	isLoad?: boolean
	postId: number
	onClick?: () => void
}

export function SaveButton({
	styles,
	isLoad,
	onClick,
	postId,
}: SaveButtonProps) {
	const [isSave, setIsSave] = useState(false)

	const isAuth = UserStore.isUserAuth

	useEffect(() => {
		if (isAuth) {
			saveCheck()
		}
	}, [])

	const saveCheck = async () => {
		const favorite = await favoriteService.checkIsFavorite(postId)
		if (favorite) {
			setIsSave(true)
			return true
		}
	}

	const { mutate: createSaveMutation } = useMutation({
		mutationKey: ['create-like'],
		mutationFn: (postId: number) => favoriteService.save(postId),
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const { mutate: deleteSaveMutation } = useMutation({
		mutationKey: ['delete-like'],
		mutationFn: (postId: number) => favoriteService.deleteSave(postId),
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const handleClick = () => {
		onClick
		if (isAuth) {
			setIsSave(!isSave)
		}
	}

	const createSave = () => {
		createSaveMutation(postId)
	}

	const deleteSave = () => {
		deleteSaveMutation(postId)
	}

	return (
		<button disabled={isLoad} onClick={handleClick}>
			<div className='flex gap-2'>
				{isLoad && <Loader />}
				{isSave ? (
					<Pin onClick={deleteSave} className='text-primary fill-primary' />
				) : (
					<Pin onClick={createSave} className='text-primary' />
				)}
			</div>
		</button>
	)
}
