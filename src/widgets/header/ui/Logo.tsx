import Image from 'next/image'
import Link from 'next/link'
import { PAGES_NAVIGATION } from '@/shared/router'

export function Logo() {
	return (
		<Link href={PAGES_NAVIGATION.MAIN}>
			<Image
				src='/header/Logo.svg'
				width={148}
				height={44}
				alt='logo'
				priority
			/>
		</Link>
	)
}