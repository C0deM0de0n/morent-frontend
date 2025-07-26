import { toast } from 'sonner'

export const toastError = (status: number) => {
	if(status === 404 || status === 400) {
		toast.error('Invalid Email or Password')
	} else if(status === 409) {
		toast.error('This email is already used')
	} else {
		toast.error('Something went wrong')
	}
}