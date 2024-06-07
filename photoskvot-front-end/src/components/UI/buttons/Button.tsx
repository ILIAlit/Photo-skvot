'use client'

import { Loader } from '../Loader'

export enum ButtonVariant {
	contained = 'contained',
	outlined = 'outlined',
}

interface ButtonProps {
	variant: ButtonVariant
	children: string
	disabled?: boolean
	loading?: boolean
	styles?: string
	isLoad?: boolean
	onClick?: (event: any) => void
}

export function Button({
	children,
	variant,
	styles,
	isLoad,
	onClick,
}: ButtonProps) {
	return (
		<button
			disabled={isLoad}
			onClick={onClick}
			className={
				(variant === ButtonVariant.contained
					? 'bg-primary  text-white  hover:bg-light'
					: 'bg-white text-primary border border-primary hover:border-light hover:text-light') +
				' tracking-wide font-semibold w-full py-4 rounded-lg transition-all duration-700 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ' +
				styles
			}
		>
			<div className='flex gap-2'>
				{isLoad && <Loader />}
				<span>{children}</span>
			</div>
		</button>
	)
}
