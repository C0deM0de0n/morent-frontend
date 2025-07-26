import { AxiosResponse } from 'axios'
import { axiosClassic } from '@/shared/api'
import { saveAccessTokenToCookie, removeAccessTokenFromCookie } from '@/shared/utils'
import type { IUser } from '@/entities/user/types'
import type { TLoginSchema } from '../libs/zod'

class AuthService {
	public async login(data: TLoginSchema): Promise<AxiosResponse<IUser>> {
		const response = await axiosClassic.post<IUser>('/user/login', data)

		if (response.data.accessToken)
			saveAccessTokenToCookie(response.data.accessToken)

		return response
	}

	public async register(): Promise<AxiosResponse<IUser>> {
		const response = await axiosClassic.post<IUser>('/auth/register')

		if (response.data.accessToken)
			saveAccessTokenToCookie(response.data.accessToken)

		return response
	}

	public async logout(): Promise<AxiosResponse> {
		const response = await axiosClassic.post('/auth/logout')
		
		if(response.status === 200) removeAccessTokenFromCookie()

		return response
	}
}

export const authService = new AuthService()
