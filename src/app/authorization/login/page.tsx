import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { AuthWrapper, LoginForm } from '@/features/authorization/ui'
import { NO_INDEX_PAGE } from '@/shared/constants'
import { PAGES_NAVIGATION } from '@/shared/router'

export const metadata: Metadata = {
	robots: NO_INDEX_PAGE
}

export default function Login() {
	return (
		<section className='flex justify-center items-center w-full h-screen'>
			<AuthWrapper
				heading='LOGIN'
				description='Sign in to access your account using your email and password'
				isSHowSocial={true}
				backButtonHref={PAGES_NAVIGATION.REGISTER}
				backButtonLabel='No account yet? Register now'
			>
				<LoginForm />
			</AuthWrapper>
			<Toaster richColors/>
		</section>
	)
}