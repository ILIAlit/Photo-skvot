'use client'

import { useState } from 'react'
import { Tab } from './Tab'
import { TabPanel, TabPanelsType } from './TabPanel'

interface TabSwitchProps {
	styles?: string
}

type TabObject = {
	title: string
	type: TabPanelsType
}

export const TabSwitch = ({ styles }: TabSwitchProps) => {
	const [tabPanel, setTabPanel] = useState<TabPanelsType>(TabPanelsType.profile)

	const tabs: TabObject[] = [
		{
			title: 'Профиль',
			type: TabPanelsType.profile,
		},
		{
			title: 'Лайки',
			type: TabPanelsType.likes,
		},
		{
			title: 'Избранные',
			type: TabPanelsType.favorites,
		},
		{
			title: 'Подписки',
			type: TabPanelsType.subscriptions,
		},
	]

	return (
		<div className='md:flex'>
			<ul className='flex-column space-y space-y-4 text-sm font-medium text-primary md:me-4 mb-4 md:mb-0'>
				{tabs.map(tab => {
					return (
						<Tab
							styles={tab.type === tabPanel ? 'bg-primary text-white' : ''}
							key={tab.title}
							onClick={() => setTabPanel(tab.type)}
						>
							{tab.title}
						</Tab>
					)
				})}
			</ul>
			<TabPanel type={tabPanel} />
		</div>
	)
}
