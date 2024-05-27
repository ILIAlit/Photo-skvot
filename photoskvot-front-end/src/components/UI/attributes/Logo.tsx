'use client'

import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useRouter } from 'next/navigation'

export default function Logo() {
	const { push } = useRouter()

	return (
		<button onClick={() => push(PUBLIC_PAGES.HOME)}>
			<div className='flex gap-2'>
				<div>
					<img
						src='http://localhost:3000/logo.svg'
						className='h-10 w-10'
						alt='logo'
					/>
				</div>
				<span className='text-1.5xl'>SnapJoy</span>
			</div>
		</button>
	)
}
