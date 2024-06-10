'use client'

import { Button, ButtonVariant } from '@/components/UI/buttons/Button'
import { PUBLIC_PAGES } from '@/config/public-pages-url.config'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { DashboardPanel, DashboardPanelsType } from './DashboardPanel'
import { DashboardTab } from './DashBoardTab'

interface DashboardSwitchProps {
	styles?: string
}

type TabObject = {
	title: string
	type: DashboardPanelsType
}

export const DashboardSwitch = ({ styles }: DashboardSwitchProps) => {
	const { push } = useRouter()

	const [tabPanel, setTabPanel] = useState<DashboardPanelsType>(
		DashboardPanelsType.users
	)

	const tabs: TabObject[] = [
		{
			title: 'Пользователи',
			type: DashboardPanelsType.users,
		},
		{
			title: 'Создать админа',
			type: DashboardPanelsType.createAdmin,
		},
		{
			title: 'Курсы',
			type: DashboardPanelsType.courses,
		},
		{
			title: 'Посты',
			type: DashboardPanelsType.posts,
		},
		{
			title: 'Статистика',
			type: DashboardPanelsType.state,
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
									styles={tab.type === tabPanel ? 'bg-primary text-white' : ''}
									key={tab.title}
									onClick={() => setTabPanel(tab.type)}
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

			<div className='flex flex-col flex-1 overflow-y-auto'>
				<DashboardPanel type={tabPanel} />
			</div>
		</div>
	)
}
