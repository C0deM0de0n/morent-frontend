import { useMutation } from '@tanstack/react-query';
import { authService } from '../services';

export const useRegisterMutation = () => {
	const {
		mutate,
		isPending: isLoadingRegister,
	} = useMutation({
		mutationKey: ['auth register'],
		mutationFn: () => authService.register()
	})

	return { registerMutate: mutate, isLoadingRegister }
}