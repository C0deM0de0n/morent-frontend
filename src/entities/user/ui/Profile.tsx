'use client'
import Link from 'next/link'
import { Button, Skeleton } from '@/shared/components'
import { PAGES_NAVIGATION } from '@/shared/router'
import { Avatar } from './Avatar'
import { useGetUserProfileQuery } from '../hooks'

export function Profile() {
	const {
		profile,
		isLoading,
		isError
	} = useGetUserProfileQuery()

	if (isLoading) return <Skeleton className='w-11 h-11 bg-gray-300 rounded-full' />

	if (isError || !profile) {
		return (
			<Link href={PAGES_NAVIGATION.LOGIN}>
				<Button>Sign In</Button>
			</Link>
		)
	}

	return (
		<div className='relative w-11 h-11 bg-[#3563E9] cursor-pointer overflow-hidden rounded-full'>
			<Avatar email={profile.email} picture={profile.picture} />
		</div>
	)
}