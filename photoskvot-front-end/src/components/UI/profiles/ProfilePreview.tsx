'use client'

import { useProfile } from '@/hooks/useProfile'
import UserStore from '@/stores/UserStore'
import { useState } from 'react'
import { Button, ButtonVariant } from '../buttons/Button'
import { Avatar } from './Avatar'
import { ProfileForm } from './ProfileForm'

interface ProfilePreviewProps {
	styles?: string
}

export const ProfilePreview = ({ styles }: ProfilePreviewProps) => {
	const [editingProfile, setEditingProfile] = useState(false)

	const { profileData, isLoading } = useProfile()
	const user = UserStore.userAuth

	return editingProfile ? (
		<ProfileForm setEditing={() => setEditingProfile(false)} />
	) : (
		<div>
			<div className='flex items-center gap-4'>
				<Avatar
					styles='h-32 w-32'
					userName={user?.name}
					avatarSrc={profileData?.avatar}
				/>
				<div className='text-lg flex flex-col gap-2'>
					<a
						href='#'
						className='font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out'
					>
						{user?.name}
					</a>
					{profileData?.status && (
						<span className='inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full'>
							{profileData?.status}
						</span>
					)}
				</div>
			</div>

			<p className='mt-2 text-sm text-gray-900 mb-5'>{profileData?.about}</p>

			<Button
				onClick={() => setEditingProfile(true)}
				styles='max-w-36'
				variant={ButtonVariant.contained}
			>
				Изменить
			</Button>

			<div className='flex mt-4'></div>
		</div>
	)
}
