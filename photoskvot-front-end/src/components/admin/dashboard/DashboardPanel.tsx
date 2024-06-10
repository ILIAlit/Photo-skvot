'use client'

import { FavoriteList } from '@/components/favorite/FavoriteList'
import { LikeList } from '@/components/like/LikeList'
import { UserList } from '../UserList'

export enum DashboardPanelsType {
	createAdmin = 'create-admin',
	users = 'users',
	state = 'state',
	courses = 'courses',
	posts = 'posts',
}

interface DashboardProps {
	type: DashboardPanelsType
	styles?: string
}

type panelObject = {
	type: DashboardPanelsType
	component: any
}

export const DashboardPanel = ({ styles, type }: DashboardProps) => {
	const panels: panelObject[] = [
		{
			type: DashboardPanelsType.users,
			component: <UserList />,
		},
		{
			type: DashboardPanelsType.createAdmin,
			component: <LikeList />,
		},
		{
			type: DashboardPanelsType.posts,
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
