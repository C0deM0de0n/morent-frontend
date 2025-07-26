import { type PropsWithChildren } from 'react'
import Link from 'next/link'
import { 
	Card, 
	CardHeader, 
	CardTitle, 
	CardDescription, 
	CardContent,
	CardFooter,
	Button
} from '@/shared/components'
import { Socials } from './Socials'

interface Props {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isSHowSocial?: boolean
}

export function AuthWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref,
	isSHowSocial = false
}: PropsWithChildren<Props>) {
	return (
		<Card className='w-1/4'>
			<CardHeader>
				<CardTitle>{heading}</CardTitle>
				{description && (
					<CardDescription>{description}</CardDescription>
				)}
			</CardHeader>
			<CardContent>
				{isSHowSocial && <Socials /> }
				{children}
			</CardContent>
			<CardFooter>
				{backButtonLabel && backButtonHref && (
					<Button variant={'link'} className='w-full'>
						<Link href={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}