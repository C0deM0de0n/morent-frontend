'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, Button } from '@/shared/components'
import { AuthFormField } from './AuthFormField'
import { registerSchema, type TRegisterSchema } from '../schemas'
import { useRegisterMutation } from '../hooks'

export function RegisterForm() {

	const { registerMutate } = useRegisterMutation()

	const form = useForm<TRegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		}
	})

	const onSubmit = (data: TRegisterSchema) => {
		registerMutate({ user: data, reset: form.reset })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-full'
			>
				<AuthFormField<TRegisterSchema>
					control={form.control}
					name='name'
					placeholder='Kris coder'
				/>
				<AuthFormField<TRegisterSchema>
					control={form.control}
					name='email'
					placeholder='test@gmail.com'
				/>
				<AuthFormField<TRegisterSchema>
					control={form.control}
					name='password'
					placeholder='******'
				/>
				<AuthFormField<TRegisterSchema>
					control={form.control}
					name='passwordRepeat'
					placeholder='******'
				/>
				<Button className='w-56 m-auto'>SUBMIT</Button>
			</form>
		</Form>
	)
}