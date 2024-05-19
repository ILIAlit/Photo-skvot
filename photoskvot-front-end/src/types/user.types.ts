import { IBaseType } from './root.types'

export enum UserRole {
	Admin = 'admin',
	User = 'user',
}

export interface IUser extends IBaseType {
	name: string
	email: string
	password: string
	role: UserRole
	isBaned: boolean
}
