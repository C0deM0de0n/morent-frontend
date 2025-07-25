import Cookie from 'js-cookie'
import { TokenType } from '../constants'

export const getAccessTokenFromCookie = () => {
	const accessToken = Cookie.get(TokenType.ACCESS_TOKEN)

	return accessToken || null
}

export const saveAccessTokenToCookie = (accessToken: string) => {
	Cookie.set(TokenType.ACCESS_TOKEN, accessToken, {
		domain: process.env.DOMAIN,
		sameSite: 'Strict',
		secure: true,
		expires: 1,
	})
}

export const removeAccessTokenFromCookie = () => {
	Cookie.remove(TokenType.ACCESS_TOKEN)
}