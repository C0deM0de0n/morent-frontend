'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, Button } from '@/shared/components'
import { AuthFormField } from './AuthFormField'
import { loginSchema, type TLoginSchema } from '../schemas'
import { useLoginMutation } from '../hooks'

export function LoginForm() {

	const { loginMutate } = useLoginMutation()

	const form = useForm<TLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (data: TLoginSchema) => {
		loginMutate({ user: data, reset: form.reset })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-full'
			>
				<AuthFormField<TLoginSchema>
					control={form.control}
					name='email'
					placeholder='test@gmail.com'
				/>
				<AuthFormField<TLoginSchema>
					control={form.control}
					name='password'
					placeholder='******'
				/>
				<Button className='w-56 m-auto'>SUBMIT</Button>
			</form>
		</Form>
	)
}