'use client'

interface DashboardTabProps {
	styles?: string
	children: string
	onClick?: () => void
}

export const DashboardTab = ({
	styles,
	children,
	onClick,
}: DashboardTabProps) => {
	return (
		<a
			onClick={onClick}
			href='#'
			className='flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700'
		>
			{children}
		</a>
	)
}
