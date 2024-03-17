export enum UserRole {
	Admin = 'admin',
	User = 'user',
}

export class User {
	id: number
	name: string
	email: string
	password: string
	role: UserRole
	isBaned: boolean
}
