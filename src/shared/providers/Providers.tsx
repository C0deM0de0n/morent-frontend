'use client'
import { useState, type PropsWithChildren } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Providers({ 
	children 
}: PropsWithChildren) {

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000,
						refetchOnWindowFocus: false,
					}
				}
			})
	)

	return (
		<QueryClientProvider client={queryClient}>
				{children}
			<ReactQueryDevtools initialIsOpen={false}/>
		</QueryClientProvider>
	)
}