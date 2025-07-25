import { type ButtonHTMLAttributes } from 'react'
import { cn } from '../utils';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text: string
}

export function Button({ className, text, ...rest }: Props) {
	return (
		<button
			{...rest}
			className={cn(
				'flex justify-center items-center w-32 h-11 bg-[#3563E9] rounded-sm text-sm font-semibold text-white cursor-pointer', 
				className
			)}
		>
			{text}
		</button>
	);
}