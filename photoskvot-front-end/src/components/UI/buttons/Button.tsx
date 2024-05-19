'use client'

export default function Button({ children, variant }: any) {
	return (
		<button
			className={
				(variant === 'contained'
					? 'bg-primary  text-white  hover:bg-secondary'
					: 'bg-white text-primary border border-primary hover:bg-light') +
				' tracking-wide font-semibold w-full py-4 rounded-lg transition-all duration-00 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
			}
		>
			<span className='ml-3'>{children}</span>
		</button>
	)
}
