'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormLabel,
	FormField,
	FormItem,
	FormControl,
	Input,
	FormMessage,
	Button
} from '@/shared/components'
import { loginSchema, type TLoginSchema } from '../libs/zod'
import { useLoginMutation } from '../hooks'

export function LoginForm() {

	const { loginMutate } = useLoginMutation()

	const form = useForm<TLoginSchema>({
		resolver: zodResolver(loginSchema)
	})

	const onSubmit = (data: TLoginSchema) => {
		loginMutate(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-full'
			>
				<FormField
					control={form.control}
					name={'email'}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='test@gmail.com'
									type={'email'}
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-red-600' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={'password'}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder='******'
									type={'password'}
									autoComplete='password'
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-red-600' />
						</FormItem>
					)}
				/>
				<Button className='w-56 m-auto'>SUBMIT</Button>
			</form>
		</Form>
	)
}