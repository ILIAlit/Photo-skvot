'use client'

import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import UserStore from '@/stores/UserStore'
import { IUser } from '@/types/user.types'

interface AvatarProps {
	styles?: string
	avatarSrc?: string
	user: IUser | null
}

export const Avatar = ({ styles, avatarSrc, user }: AvatarProps) => {
	const getFirstLatter = (userName: string | undefined) => {
		if (!userName) return
		return userName.charAt(0).toUpperCase()
	}

	return (
		<div className='group'>
			<div className='bg-lightPrimary h-16 w-16 rounded-full flex items-center justify-center hover:opacity-80 focus:outline-none'>
				{avatarSrc ? (
					<img
						src={avatarSrc}
						className={'h-16 w-16 rounded-full ' + styles}
						alt='logo'
					/>
				) : (
					<b>
						<span className='text-primary select-none'>
							{getFirstLatter(user?.name)}
						</span>
					</b>
				)}
			</div>
			<div className='absolute right-10 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300'>
				<div className='py-1'>
					<a
						href={PRIVATE_PAGES.PROFILE}
						className='block px-4 py-2 text-sm text-primary hover:bg-gray-100'
					>
						Профиль
					</a>
					<a
						href={PRIVATE_PAGES.EDUCATION}
						className='block px-4 py-2 text-sm text-primary hover:bg-gray-100'
					>
						Обучение
					</a>
					<a
						href={PUBLIC_PAGES.HOME}
						onClick={() => UserStore.logout()}
						className='block px-4 py-2 text-sm text-primary hover:bg-gray-100'
					>
						Выйти
					</a>
				</div>
			</div>
		</div>
	)
}
