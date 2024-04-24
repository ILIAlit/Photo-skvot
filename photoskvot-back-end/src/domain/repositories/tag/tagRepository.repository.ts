import { Tag } from 'src/domain/models/tag/tag'
import { UpdateTagDto } from 'src/infrastructure/tags/dto/update-tag.dto'

export interface ITagRepository {
	getTags(offset: number, limit: number): Promise<Tag[]>
	getPostTags(postId: number, offset: number, limit: number): Promise<Tag[]>
	getPostByType(type: string): Promise<Tag>
	createTag(type: string, transactionHost: object): Promise<Tag>
	updateTag(dto: UpdateTagDto, tagId: number): Promise<Tag>
	deleteTag(tagId: number): Promise<void>
}
