export interface ILoginForm {
	name: string
	password: string
}

export interface IRegisterForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	token: string
}
