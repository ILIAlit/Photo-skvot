import { IBaseType } from './root.types'

export interface IProfile extends IBaseType {
	avatar: string
	status: string
	about: string
	social_link: string
}

export interface IProfileForm {
	avatar: File
	status: string
	about: string
	social_link: string
}
