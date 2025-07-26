import { Profile } from '@/entities/user/ui'
import { Container } from '@/shared/components'
import { Logo } from './Logo'
import { Favorites } from './Favorites'
import { Notification } from './Notification'
import { Settings } from './Settings'

export async function Header() {

	return (
		<header className='fixed flex justify-center items-center w-full h-32 bg-white'>
			<Container>
				<div className='flex justify-between items-center'>
					<Logo />
					<div className='flex items-center gap-5'>
						<Favorites />
						<Notification />
						<Settings />
						<Profile />
					</div>
				</div>
			</Container>
		</header>
	)
}