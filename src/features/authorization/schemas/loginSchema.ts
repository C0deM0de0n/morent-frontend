import { z } from 'zod'

export const loginSchema = z.object({
	email: z.email({
		message: 'Invalid email',
	}),
	password: z
		.string({ error: 'Required' })
		.min(6, { error: 'Too short' })
		.max(20, { error: 'Too long' }),
})

export type TLoginSchema = z.infer<typeof loginSchema>
