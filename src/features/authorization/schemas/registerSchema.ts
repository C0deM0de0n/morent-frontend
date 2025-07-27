import { z } from 'zod'

export const registerSchema = z.object({
	name: z
		.string({ error: 'Required' })
		.min(3, { error: 'Too short' })
		.max(20, { error: 'Too long' }),
	email: z.email({
		message: 'Invalid email',
	}),
	password: z
		.string({ error: 'Required' })
		.min(6, { error: 'Too short' })
		.max(20, { error: 'Too long' }),
	passwordRepeat: z
		.string({ error: 'Required' })
		.min(6, { error: 'Too short' })
		.max(20, { error: 'Too long' }),
}).refine((data) => data.password === data.passwordRepeat, {
	error: `Passwords don't match`,
	path: ['passwordRepeat']
})

export type TRegisterSchema = z.infer<typeof registerSchema>
