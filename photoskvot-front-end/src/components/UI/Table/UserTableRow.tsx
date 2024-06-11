'use client'

import { Button, ButtonVariant } from '../buttons/Button'

interface UserTableRowProps {
	styles?: string
	email: string
	name: string
	isBane: boolean
	onClick?: (event: any) => void
}

export const UserTableRow = ({
	styles,
	email,
	name,
	isBane,
	onClick,
}: UserTableRowProps) => {
	return (
		<tr>
			<td className='py-4 px-6 border-b border-gray-200'>{name}</td>
			<td className='py-4 px-6 border-b border-gray-200 truncate'>{email}</td>
			<td className='py-4 px-6 border-b border-gray-200'>
				{isBane ? 'Заблокирован' : 'Активен'}
			</td>
			<td className='py-4 px-6 border-b border-gray-200'>
				<Button
					onClick={onClick}
					styles='max-w-32 max-h-9 '
					disabled={isBane ? true : false}
					variant={ButtonVariant.outlined}
				>
					Заблокировать
				</Button>
			</td>
		</tr>
	)
}
