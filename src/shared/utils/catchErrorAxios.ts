import type { AxiosError } from 'axios'
import type { IAxiosErrorMessage } from '../types'

export const catchErrorAxios = (
	error: AxiosError<IAxiosErrorMessage>
): string => {
	const message = error.response?.data?.message

	return message
		? typeof message === 'object'
			? message[0]
			: message
		: error.message
}
