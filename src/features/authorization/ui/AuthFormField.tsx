import {
	FormLabel,
	FormField,
	FormItem,
	FormControl,
	Input,
	FormMessage,
} from '@/shared/components'
import type { Control, Path } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'


interface Props<T extends FieldValues> {
	control: Control<T>
	name: Path<T>
	placeholder: string
}

export function AuthFormField<T extends FieldValues>({
	control, name, placeholder
}: Props<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>
						{name.charAt(0).toUpperCase() + name.slice(0)}
					</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type={name}
							{...field}
						/>
					</FormControl>
					<FormMessage className='text-red-600' />
				</FormItem>
			)}
		/>
	)
}