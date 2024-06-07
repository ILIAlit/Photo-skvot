'use client'

import { Button, ButtonVariant } from '@/components/UI/buttons/Button'
import { Avatar } from '@/components/UI/profiles/Avatar'
import { useUserData } from '@/hooks/user/useUserData'
import UserStore from '@/stores/UserStore'
import { Link } from 'lucide-react'

interface ShowUserDataProps {
	userId: number
}

export default function ShowUserData({ userId }: ShowUserDataProps) {
	const { userData, isLoading } = useUserData(userId)
	const authUser = UserStore?.userAuth
	const profile = userData?.profile

	return (
		<div className='h-screen'>
			<div className='max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl'>
				<div className='border-b px-4 pb-6'>
					<div className='text-center my-4'>
						<Avatar
							styles='h-32 w-32 m-auto'
							userName={userData?.name}
							avatarSrc={profile?.avatar}
						/>
						<div className='py-2'>
							<h3 className='font-bold text-2xl text-gray-800 dark:text-white mb-1'>
								{userData?.name}
							</h3>
							<a
								href={profile?.social_link}
								className='inline-flex text-gray-700 dark:text-gray-300 items-center'
							>
								<Link className='h-5 w-5 text-gray-400 dark:text-gray-600 mr-1' />
								ссылка на меня
							</a>
							<p className='mt-2 text-sm text-gray-900 mb-5'>
								{profile?.about}
							</p>
							<div>
								<span className='inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full'>
									{profile?.status}
								</span>
							</div>
						</div>
					</div>
					<div className='flex gap-2 px-2'>
						{!(authUser?.id === userData?.id) && (
							<Button variant={ButtonVariant.contained}>Подписаться</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
