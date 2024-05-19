import { IBaseType } from './root.types'

export interface IPhoto extends IBaseType {
	alt: string
	src: string
}

export interface IPhotoForm {
	alt: string
	photo: File
}
