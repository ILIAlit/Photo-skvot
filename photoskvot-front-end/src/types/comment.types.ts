import { IBaseType } from './root.types'

export interface IComment extends IBaseType {
	post_id: number
	user_id: number
	text: string
}

export interface ICommentForm {
	postId: number
	text: string
}
