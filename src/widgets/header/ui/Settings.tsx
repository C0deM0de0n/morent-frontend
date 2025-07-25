import Image from 'next/image'

export function Settings() {
	return (
		<div
			className='flex justify-center items-center w-11 h-11 bg-white border-[1px] border-[#C3D4E966] cursor-pointer rounded-full'
		>
			<Image
				src='/header/Settings.svg'
				width={24}
				height={24}
				alt='favorites'
			/>
		</div>
	)
}