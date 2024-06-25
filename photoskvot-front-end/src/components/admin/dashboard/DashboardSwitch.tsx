'use client'

import { Button, ButtonVariant } from '@/components/UI/buttons/Button'
import { PRIVATE_PAGES } from '@/config/private-pages-url.config'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { DashboardPanelsType } from './DashboardPanel'
import { DashboardTab } from './DashBoardTab'

interface DashboardSwitchProps {
	styles?: string
	children: any
}

type TabObject = {
	title: string
	link: string
}

export const DashboardSwitch = ({ styles, children }: DashboardSwitchProps) => {
	const { push } = useRouter()

	const [tabPanel, setTabPanel] = useState<DashboardPanelsType>(
		DashboardPanelsType.users
	)

	const tabs: TabObject[] = [
		{
			title: 'Пользователи',
			link: PRIVATE_PAGES.USER_LIST,
		},
		{
			title: 'Создать админа',
			link: PRIVATE_PAGES.ADMIN,
		},
		{
			title: 'Курсы',
			link: PRIVATE_PAGES.COURSE_LIST,
		},
		{
			title: 'Посты',
			link: PRIVATE_PAGES.ADMIN,
		},
		{
			title: 'Статистика',
			link: PRIVATE_PAGES.ADMIN,
		},
	]

	return (
		<div className='flex h-screen'>
			<div className='hidden md:flex flex-col w-64 bg-white'>
				<div className='flex items-center justify-center h-16 bg-primary'>
					<span className='text-white opacity-9 font-bold uppercase'>
						Панель администратора
					</span>
				</div>
				<div className='flex flex-col flex-1 overflow-y-auto'>
					<nav className='flex-1 px-2 py-4 bg-primary'>
						{tabs.map(tab => {
							return (
								<DashboardTab
									styles={tab.link === tabPanel ? 'bg-primary text-white' : ''}
									key={tab.title}
									onClick={() => push(tab.link)}
								>
									{tab.title}
								</DashboardTab>
							)
						})}
						<Button
							onClick={() => push(PUBLIC_PAGES.HOME)}
							styles='max-w-32 max-h-7 ml-3 px-4 py-2 mt-2'
							variant={ButtonVariant.outlined}
						>
							Выход
						</Button>
					</nav>
				</div>
			</div>

			<div className='flex flex-col flex-1 overflow-y-auto'>{children}</div>
		</div>
	)
}
