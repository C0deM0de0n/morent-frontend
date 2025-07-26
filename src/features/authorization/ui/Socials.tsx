'use client'
import Image from 'next/image'
import { Button } from '@/shared/components'

export function Socials() {

	const onClick = async () => {
		if(window) {
			const url = process.env.NEXT_PUBLIC_SERVER_GOOGLE_AUTH_URL
			if(!url) throw new Error('google auth url not provided')
			window.location.href = url
		}
	}

	return (
		<div className='flex flex-col items-center gap-2'>
			<Button
				onClick={() => onClick()}
				variant={'outline'}
				className='w-36 gap-2'>
				<Image
					src={'/socials/Google.svg'}
					width={20}
					height={20}
					alt="google"
					priority
				/>
				Sign In
			</Button>
			<div className="flex items-center w-full">
				<div className="flex-grow border-t border-gray-300"></div>
				<span className="mx-4 text-gray-500 font-medium">OR</span>
				<div className="flex-grow border-t border-gray-300"></div>
			</div>
		</div>
	)
}