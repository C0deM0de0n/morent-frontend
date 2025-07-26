import type { Metadata } from 'next'
import { AuthWrapper } from '@/features/authorization/ui'
import { NO_INDEX_PAGE } from '@/shared/constants'
import { PAGES_NAVIGATION } from '@/shared/router'

export const metadata: Metadata = {
	robots: NO_INDEX_PAGE
}

export default function Register() {
	return (
		<section className='flex justify-center items-center w-full h-screen'>
			<AuthWrapper
				heading='Register'
				description='Register to access all features and manage your profile'
				isSHowSocial={true}
				backButtonHref={PAGES_NAVIGATION.LOGIN}
				backButtonLabel='Already have an account? Login now'
			>
			</AuthWrapper>
		</section>
	)
}