export enum UserRole {
	Admin = 'admin',
	User = 'user',
}

export interface User {
	id: number
	name: string
	email: string
	password: string
	role: UserRole
	isBaned: boolean
}
