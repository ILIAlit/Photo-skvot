'use client'

import { DashboardSwitch } from '@/components/admin/dashboard/DashboardSwitch'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
	const { push } = useRouter()

	return <DashboardSwitch />
}
