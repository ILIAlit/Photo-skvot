'use client'

export default function AuthButton({ children }: any) {
	return (
		<button className='bg-primary mt-5 tracking-wide font-semibold text-white w-full py-4 rounded-lg hover:bg-secondary transition-all duration-00 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
			<svg
				className='w-6 h-6 -ml-2'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
				<circle cx='8.5' cy='7' r='4' />
				<path d='M20 8v6M23 11h-6' />
			</svg>
			<span className='ml-3'>{children}</span>
		</button>
	)
}
