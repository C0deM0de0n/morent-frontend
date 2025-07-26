import { useMutation } from '@tanstack/react-query';
import { authService } from '../services';
import { TLoginSchema } from '../libs/zod';
import { toastError } from '../utils';

export const useLoginMutation = () => {
	const {
		mutate,
		isPending: isLoadingLogin,
	} = useMutation({
		mutationKey: ['auth login'],
		mutationFn: (data: TLoginSchema) => authService.login(data),
		onError: (error) => {
			const status = Number(error.message.match(/\d/g)?.join(''))
			toastError(status)
		}
	})

	return { loginMutate: mutate, isLoadingLogin }
}