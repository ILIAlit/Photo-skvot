'use client'

import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useUserData } from '@/hooks/user/useUserData'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Avatar } from '../profiles/Avatar'

interface CardAuthorProps {
	userId: number
}

export const CardAuthor = ({ userId }: CardAuthorProps) => {
	const { push } = useRouter()
	const { userData, isLoading } = useUserData(userId)
	const userProfile = userData?.profile
	console.log(userProfile)

	return (
		<div className='flex gap-2 text-xs text-primary items-center'>
			{isLoading ? (
				<Loader />
			) : (
				<div
					className='flex gap-2 items-center'
					onClick={() => push(PUBLIC_PAGES.SHOW_USER_DATA + userId)}
				>
					<Avatar
						styles='w-9 h-9'
						avatarSrc={userProfile?.avatar}
						userName={userData?.name}
					/>
					<span className='font-bold tracking-wide text-sm text-primary'>
						{userData?.name}
					</span>
				</div>
			)}
		</div>
	)
}
