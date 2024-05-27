'use client'

import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import UserStore from '@/stores/UserStore'
import { Plus, Search } from 'lucide-react'
import { observer } from 'mobx-react'
import { useRouter } from 'next/navigation'
import Logo from './UI/attributes/Logo'
import { Button, ButtonVariant } from './UI/buttons/Button'
import { Avatar } from './UI/profiles/Avatar'

export default observer(function NavBar() {
	const { isUserAuth, userAuth } = UserStore

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
						<Avatar user={userAuth} />
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
