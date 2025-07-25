export const TokenType = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken'
} as const

export type TTokenType = typeof TokenType[keyof typeof TokenType]