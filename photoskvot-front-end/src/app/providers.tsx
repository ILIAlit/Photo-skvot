'use client'

import { decodeToken, getToken } from '@/services/auth-token.service'
import UserStore from '@/stores/UserStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useEffect, useState } from 'react'
export function Providers({ children }: PropsWithChildren) {
	useEffect(() => {
		const token = getToken()
		if (token) {
			const decodeUser = decodeToken(token)
			UserStore.setUserAuth(decodeUser)
			UserStore.setIsUserAuth(true)
		}
	}, [])

	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)
	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
