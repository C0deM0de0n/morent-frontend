import Image from 'next/image'

export function Notification() {
	return (
		<button
			className='flex justify-center items-center w-11 h-11 bg-white border border-[#C3D4E966] cursor-pointer rounded-full'
		>
			<Image
				src='/header/Notification.svg'
				width={24}
				height={24}
				alt='favorites'
			/>
		</button>
	)
}