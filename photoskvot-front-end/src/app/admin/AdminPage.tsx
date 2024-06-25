'use client'

import { useRouter } from 'next/navigation'
import UserPage from './user/UserPage'

export default function AdminPage() {
	const { push } = useRouter()

	return <UserPage />
}
