'use client'

interface TabProps {
	styles?: string
	children: string
	onClick?: () => void
}

export const Tab = ({ styles, children, onClick }: TabProps) => {
	return (
		<li>
			<a
				onClick={onClick}
				href='#'
				className={
					'inline-flex items-center px-4 py-3 text-primary bg-gray-50 focus:bg-primary focus:text-white rounded-lg active w-full ' +
					styles
				}
				aria-current='page'
			>
				{children}
			</a>
		</li>
	)
}
