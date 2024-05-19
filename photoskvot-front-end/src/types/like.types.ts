import { IPost } from './post.types'
import { IBaseType } from './root.types'

export interface ILikeForm {
	postId: number
}

export interface ICreateLikeResponse {
	isLiked: boolean
}

export interface IGetLikeResponse extends IBaseType {
	post_id: number
	user_id: number
	post: IPost
}
