'use client'

import { Dot, Mail } from 'lucide-react'
import Logo from './UI/attributes/Logo'

export default function Footer() {
	return (
		<footer className='bg-primary px-12 flex justify-between items-center py-7  mt-28'>
			<Logo />
			<div className='flex text-1.5xl font-semibold items-center'>
				<div>
					<Mail className='w-8 h-8' />
				</div>
				<div>
					<Dot />
				</div>
				<div>
					<span>2024</span>
				</div>
			</div>
		</footer>
	)
}
