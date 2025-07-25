import { axiosClassic } from '../api/interceptors';
import { saveAccessTokenToCookie } from '../utils'

class TokenService {
	public async update() {
		const response = await axiosClassic.post('/auth/update-tokens')

		if(response.data.accessToken) saveAccessTokenToCookie(response.data.accessToken)

		return response
	}
}

export const tokenService = new TokenService()