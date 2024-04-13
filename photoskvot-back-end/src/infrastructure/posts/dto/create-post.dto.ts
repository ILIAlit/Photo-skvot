import { IPostCreateAttr } from 'src/domain/adapters/entity/post/post-create-attr.interface'

export class CreatePostDto implements IPostCreateAttr {
	title: string
	description: string
	user_id: number
}
