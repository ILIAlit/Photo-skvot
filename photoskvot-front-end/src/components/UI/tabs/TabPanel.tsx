'use client'

import { FavoriteList } from '@/components/favorite/FavoriteList'
import { LikeList } from '@/components/like/LikeList'
import { ProfilePreview } from '../profiles/ProfilePreview'

export enum TabPanelsType {
	profile = 'profile',
	likes = 'likes',
	favorites = 'favorites',
	subscriptions = 'subscriptions',
}

interface TabProps {
	type: TabPanelsType
	styles?: string
}

type panelObject = {
	type: TabPanelsType
	component: any
}

export const TabPanel = ({ styles, type }: TabProps) => {
	const panels: panelObject[] = [
		{
			type: TabPanelsType.profile,
			component: <ProfilePreview />,
		},
		{
			type: TabPanelsType.likes,
			component: <LikeList />,
		},
		{
			type: TabPanelsType.favorites,
			component: <FavoriteList />,
		},
	]

	const selectedPanel = panels.find(panel => panel.type === type)

	return (
		<div className='p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full'>
			{selectedPanel && selectedPanel.component}
		</div>
	)
}
