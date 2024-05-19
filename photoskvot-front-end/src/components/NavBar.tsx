'use client'

import { Plus, Search } from 'lucide-react'

export default function NavBar() {
	return (
		<header className='bg-primary px-12 flex justify-between items-center py-5'>
			<div className='flex gap-2'>
				<div>
					<img
						src='http://localhost:3000/logo.svg'
						className='h-12 w-12'
						alt='logo'
					/>
				</div>
				<span className='text-2xl'>SnapJoy</span>
			</div>
			<div className='flex items-center gap-7'>
				<div className='flex gap-3'>
					<button>
						<Search />
					</button>
					<button>
						<Plus />
					</button>
				</div>
				<div>
					<img
						src='http://localhost:3000/bg-picture.png'
						className='h-16 w-16 rounded-full'
						alt='logo'
					/>
				</div>
			</div>
		</header>
	)
}
