import Image from 'next/image'
import Link from 'next/link'
import { PAGES_NAVIGATION } from '@/shared/router'

export function Favorites() {
	return (
		<Link href={PAGES_NAVIGATION.DASHBOARD_FAVORITES}>
			<button
				className='flex justify-center items-center w-11 h-11 bg-white border-[1px] border-[#C3D4E966] cursor-pointer rounded-full'
			>
				<Image
					src='/header/heart.svg'
					width={24}
					height={24}
					alt='favorites'
				/>
			</button>
		</Link>
	)
}