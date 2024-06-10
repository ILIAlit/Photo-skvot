import { IProfile } from './profile.types'
import { IBaseType } from './root.types'

export enum UserRole {
	Admin = 'admin',
	User = 'user',
}

export interface IUser extends IBaseType {
	name: string
	role: string
	email: string
	isBaned: boolean
}

export interface IResUserData extends IBaseType {
	name: string
	profile: IProfile
}
