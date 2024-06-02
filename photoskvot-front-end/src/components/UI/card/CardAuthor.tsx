'use client'

import { useUserData } from '@/hooks/user/useUserData'
import { Loader } from 'lucide-react'
import { Avatar } from '../profiles/Avatar'

interface CardAuthorProps {
	userId: number
}

export const CardAuthor = ({ userId }: CardAuthorProps) => {
	const { userData, isLoading } = useUserData(userId)
	const userProfile = userData?.profile

	return (
		<div className='flex gap-2 text-xs text-primary items-center'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Avatar
						styles='w-9 h-9'
						avatarSrc={userProfile?.avatar}
						userName={userData?.name}
					/>
					<span className='font-bold tracking-wide text-sm text-primary'>
						{userData?.name}
					</span>
				</>
			)}
		</div>
	)
}
