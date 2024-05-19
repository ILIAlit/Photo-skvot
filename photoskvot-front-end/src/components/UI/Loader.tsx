'use client'

import { LoaderCircle } from 'lucide-react'

export const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderCircle className='animate-spin h-5 w-5 text-white' />
		</div>
	)
}
