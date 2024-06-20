'use client'

import { Loader } from '../Loader'

interface GradientButtonProps {
	children: string
	disabled?: boolean
	loading?: boolean
	styles?: string
	isLoad?: boolean
	onClick?: (event: any) => void
}

export function GradientButton({
	children,
	styles,
	isLoad,
	disabled = false,
	onClick,
}: GradientButtonProps) {
	return (
		<button
			disabled={isLoad || disabled}
			onClick={onClick}
			className='relative'
		>
			<div className='absolute -inset-5'>
				<div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600'></div>
			</div>
			<a
				title=''
				className='relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-900'
				role='button'
			>
				{children}
			</a>
			<div className='flex gap-2'>
				{isLoad && <Loader />}
				<span>{children}</span>
			</div>
		</button>
	)
}
