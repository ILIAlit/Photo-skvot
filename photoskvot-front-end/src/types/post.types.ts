import { IPhoto } from './photo.types'
import { IPostSetting } from './post-setting.types'
import { IBaseType } from './root.types'
import { IUser } from './user.types'

export interface IPost extends IBaseType {
	title: string
	description: string
}

export interface IPostForm {
	title: string
	description: string
	tags: string
	image: File[]
	settings: IPostSetting
}

export interface IPostRequestForm {
	title: string
	description: string
	tags: string[]
	image: File
	settings: IPostSetting
}

export interface ICreatePostResponse extends IBaseType {
	title: string
	description: string
	tags: string[]
	settings: IPostSetting
	photo: IPhoto
	user: IUser
}
