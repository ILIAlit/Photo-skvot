import { Tag } from 'src/domain/models/tag/tag'

export interface ITagRepository {
	getTags(offset: number, limit: number): Promise<Tag[]>
	getPostTags(postId: number): Promise<Tag[]>
	getPostByType(type: string): Promise<Tag>
	createTag(type: string, transactionHost: object): Promise<Tag>
	deleteTag(tagId: number): Promise<number>
}
