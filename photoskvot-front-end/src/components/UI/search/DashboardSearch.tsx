'use client'

import { Dispatch, SetStateAction } from 'react'

interface DashboardSearchProps {
	list?: string[]
	setList?: Dispatch<SetStateAction<string[] | undefined>>
}

export const DashboardSearch = ({ list, setList }: DashboardSearchProps) => {
	const search = (inputValue: string) => {
		return list?.filter((item: string) => {
			if (item.toLowerCase().includes(inputValue.toLowerCase())) {
				return true
			}
			return false
		})
	}

	return (
		<div className='flex items-center justify-between h-16 bg-white border-b border-gray-200'>
			<div className='flex items-center px-4'>
				<button className='text-gray-500 focus:outline-none focus:text-gray-700'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
				<input
					onChange={event => setList?.(search(event.target.value))}
					className='mx-4 w-full border rounded-md px-4 py-2'
					type='text'
					placeholder='Поиск'
				/>
			</div>
			<div className='flex items-center pr-4'>
				<button className='flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M12 19l-7-7 7-7m5 14l7-7-7-7'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
