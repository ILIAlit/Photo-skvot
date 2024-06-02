'use client'

import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useProfile } from '@/hooks/useProfile'
import UserStore from '@/stores/UserStore'
import { Plus, Search } from 'lucide-react'
import { observer } from 'mobx-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Logo from './UI/attributes/Logo'
import { Button, ButtonVariant } from './UI/buttons/Button'
import { Avatar } from './UI/profiles/Avatar'

export default observer(function NavBar() {
	const { isUserAuth, userAuth } = UserStore
	var { profileData, isLoading } = useProfile()
	const [handleAvatarMenuOpen, setHandleAvatarMenuOpen] = useState(false)
	console.log(handleAvatarMenuOpen)

	const { push } = useRouter()
	return (
		<header className='bg-primary py-5 px-12 flex justify-between items-center py-5'>
			<Logo />
			<div className='flex items-center gap-7'>
				<div className='flex gap-3'>
					<button>
						<Search />
					</button>
					{isUserAuth && (
						<button onClick={() => push(PRIVATE_PAGES.CREATE_POST)}>
							<Plus />
						</button>
					)}
				</div>
				<div>
					{isUserAuth ? (
						<div>
							<a onClick={() => setHandleAvatarMenuOpen(!handleAvatarMenuOpen)}>
								<Avatar
									userName={userAuth?.name}
									avatarSrc={profileData?.avatar}
								/>
							</a>
							{handleAvatarMenuOpen && (
								<div className='absolute right-10 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg transition duration-300'>
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
							)}
						</div>
					) : (
						<Button
							onClick={() => push(PUBLIC_PAGES.LOGIN)}
							styles='w-28 h-11'
							variant={ButtonVariant.outlined}
						>
							Войти
						</Button>
					)}
				</div>
			</div>
		</header>
	)
})
