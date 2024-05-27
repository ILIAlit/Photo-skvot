'use client'

import { TabSwitch } from '@/components/UI/tabs/TabSwitch'
import { useState } from 'react'

export default function Profile() {
	const [loading, setLoading] = useState(false)

	return (
		<div>
			<TabSwitch />
		</div>
	)
}
