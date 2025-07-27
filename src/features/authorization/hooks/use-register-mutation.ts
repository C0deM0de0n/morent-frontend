import { useRouter } from 'next/navigation'
import { useMutation, QueryClient } from '@tanstack/react-query'
import { PAGES_NAVIGATION } from '@/shared/router'
import { toast } from 'sonner'
import { authService } from '../services'
import { toastError } from '../utils'
import type { UseFormReset } from 'react-hook-form'
import type { TRegisterSchema } from '../schemas'

export const useRegisterMutation = () => {
	const queryClient = new QueryClient()
	const router = useRouter()
	const { mutate, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['auth register'],
		mutationFn: (data: {
			user: TRegisterSchema
			reset: UseFormReset<TRegisterSchema>
		}) => authService.register(data.user),
		onSuccess: (_, variables) => {
			toast.success('Welcome')
			variables.reset()
			queryClient.refetchQueries({ queryKey: ['get user profile'] })
			router.replace(PAGES_NAVIGATION.MAIN)
		},
		onError: (error) => {
			const status = Number(error.message.match(/\d/g)?.join(''))
			toastError(status)
		},
	})

	return { registerMutate: mutate, isLoadingRegister }
}
