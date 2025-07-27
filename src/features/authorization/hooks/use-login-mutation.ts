import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { authService } from '../services'
import { useRouter } from 'next/navigation'
import { PAGES_NAVIGATION } from '@/shared/router'
import { toastError } from '../utils'
import type { UseFormReset } from 'react-hook-form'
import type { TLoginSchema } from '../schemas'


export const useLoginMutation = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['auth login'],
		mutationFn: (data: {
			user: TLoginSchema
			reset: UseFormReset<TLoginSchema>
		}) => authService.login(data.user),
		onSuccess: (_, variables) => {
			toast.success('Welcome')
			variables.reset()
			queryClient.invalidateQueries({ queryKey: ['get user profile'] })
			router.replace(PAGES_NAVIGATION.MAIN)
		},
		onError: (error) => {
			const status = Number(error.message.match(/\d/g)?.join(''))
			toastError(status)
		},
	})

	return { loginMutate: mutate, isLoadingLogin }
}
