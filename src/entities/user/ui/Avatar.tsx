import Image from 'next/image'

interface Props {
	email: string
	picture: string | null
}

export function Avatar({ email, picture}: Props) {

	if (!picture) {
		const firstLetter = email.charAt(0).toUpperCase()

		return (
			<h1 className='text-lg text-white font-bold'>
				{firstLetter}
			</h1>
		)
	}

	return (
		<Image 
			src={picture}
			fill
			alt='avatar'
			priority
		/>
	)
}