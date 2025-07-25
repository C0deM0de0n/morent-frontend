import axios, { AxiosRequestConfig, type AxiosError, type CreateAxiosDefaults } from 'axios';
import { tokenService } from '../services/tokenService';
import { 
	getAccessTokenFromCookie, 
	removeAccessTokenFromCookie,
	catchErrorAxios 
} from '../utils';
import type { IAxiosErrorMessage } from '../types';

interface IAxiosRequestConfigAdditional extends AxiosRequestConfig {
	_isRetry?: boolean
}

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

export const axiosClassic = axios.create(options)
export const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessTokenFromCookie()

	if(config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosWithAuth.interceptors.response.use(
	(config) => config,
	async (error: AxiosError<IAxiosErrorMessage>) => {
		const originalRequest = error.config as IAxiosRequestConfigAdditional
		if(
			error?.response?.status === 401 ||
			catchErrorAxios(error) === 'jwt expired' ||
			catchErrorAxios(error) === 'jwt must be provided' &&
			originalRequest && !originalRequest._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await tokenService.update()
				axiosWithAuth.request(originalRequest)
			} catch(error: unknown) {
				const refetchError = error as AxiosError<IAxiosErrorMessage>
				if(catchErrorAxios(refetchError) === 'jwt expired') {
					removeAccessTokenFromCookie()
				}
			}
		}

		throw error
	}
)
