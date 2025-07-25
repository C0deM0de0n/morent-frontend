import { IRoot } from '@/shared/types';

export interface IUser extends IRoot {
	name: string,
	email: string,
	picture: string | null,
	isVerified: boolean,
	isTwoFactorEnabled: boolean,
	accessToken: string
}