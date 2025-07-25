import { useQuery } from '@tanstack/react-query';
import { userService } from '../services';

export const useGetUserProfileQuery = () => {
	const {
		data,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['get user profile'],
		queryFn: userService.get,
		retry: 0
	})

	return { profile: data?.data, isLoading, isError }
}