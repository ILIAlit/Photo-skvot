'use client'

import { useGetAllUser } from '@/hooks/user/useGetAllUser'
import { adminService } from '@/services/admin.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UserTableRow } from '../UI/Table/UserTableRow'
import { DashboardSearch } from '../UI/search/DashboardSearch'

interface UserListProps {}

export const UserList = ({}: UserListProps) => {
	const { users, isLoading } = useGetAllUser()
	const userNames = users?.map(user => user.name.toLowerCase())
	const [userName, setUserName] = useState<string[] | undefined>(undefined)

	useEffect(() => {
		if (users) {
			setUserName(users.map(user => user.name.toLowerCase()))
		}
	}, [users])

	const { mutate } = useMutation({
		mutationKey: ['ban-user'],
		mutationFn: (userId: number) => adminService.banUser(userId),
		onSuccess: () => {
			toast.success('Пользователь заблокирован')
		},
		onError: (err: any) => {
			toast.error(err.response.data.message)
		},
	})

	const banUser = (userId: number) => {
		mutate(userId)
	}

	return (
		<div className='shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10'>
			<DashboardSearch setList={setUserName} list={userNames} />
			<table className='w-full table-fixed'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Name
						</th>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Email
						</th>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Status
						</th>
						<th className='w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase'>
							Действие
						</th>
					</tr>
				</thead>
				<tbody className='bg-white'>
					{users &&
						users.map(user => {
							if (userName?.includes(user.name.toLowerCase())) {
								return (
									<UserTableRow
										key={user.id}
										name={user.name}
										email={user.email}
										isBane={user.isBaned}
										onClick={() => banUser(Number(user.id))}
									/>
								)
							}
						})}
				</tbody>
			</table>
		</div>
	)
}
