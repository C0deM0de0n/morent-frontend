import { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
	return (
		<div className={`
			w-[1536px] m-auto
			max-2xl:w-7xl
			max-xl:w-5xl
			max-lg:w-3xl
		`}>
			{children}
		</div>
	)
}