import { IPost } from './post.types'
import { IBaseType } from './root.types'

export interface IFavoriteForm {
	postId: number
}

export interface ICreateFavoriteResponse {
	isFavorite: boolean
}

export interface IGetFavoriteResponse extends IBaseType {
	post_id: number
	user_id: number
	post: IPost
}
