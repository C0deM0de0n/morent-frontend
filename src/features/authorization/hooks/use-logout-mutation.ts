import { useMutation } from '@tanstack/react-query';
import { authService } from '../services';

export const useLogoutMutation = () => {
	const {
		mutate,
		isPending: isLoadingLogout,
	} = useMutation({
		mutationKey: ['auth logout'],
		mutationFn: () => authService.logout()
	})

	return { loginMutate: mutate, isLoadingLogout }
}