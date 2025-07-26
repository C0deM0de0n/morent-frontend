import { axiosWithAuth } from '@/shared/api';
import { saveAccessTokenToCookie } from '@/shared/utils';
import type { AxiosResponse } from 'axios';
import type { IUser } from '../types';

class UserService {
	public async get(): Promise<AxiosResponse<IUser>> {
		const response = await axiosWithAuth.get<IUser>('/user/profile')
		if(response.data.accessToken) saveAccessTokenToCookie(response.data.accessToken)

		return response
	}
}

export const userService = new UserService()