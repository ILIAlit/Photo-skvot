import { IBaseType } from './root.types'

export interface IPostSetting extends IBaseType {
	iso: number
	shutter_speed: string
	aperture: string
	instrument: string
}

export type TypePostSettingForm = Partial<Omit<IPostSetting, 'id'>>
