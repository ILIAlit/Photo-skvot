'use client'

import { observer } from 'mobx-react'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = observer(({}) => {
	return (
		<section className='bg-white'>
			<div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
					<div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src='https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
							<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
						</a>
					</div>
					<div className='col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 mb-4'
						>
							<img
								src='https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
							<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
						</a>
						<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
							<a
								href=''
								className='group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40'
							>
								<img
									src='https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
								<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
							</a>
							<a
								href=''
								className='group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40'
							>
								<img
									src='https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt=''
									className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
								/>
								<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
							</a>
						</div>
					</div>
					<div className='col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col'>
						<a
							href=''
							className='group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow'
						>
							<img
								src='https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
							/>
							<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
})

export default Page
