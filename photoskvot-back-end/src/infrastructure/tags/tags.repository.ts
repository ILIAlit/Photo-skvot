import { Inject } from '@nestjs/common'
import { Tag } from 'src/domain/models/tag/tag'
import { ITagRepository } from 'src/domain/repositories/tag/tagRepository.repository'
import { UpdateTagDto } from './dto/update-tag.dto'
import { TagEntity } from './entities/tag.entity'

export class TagRepository implements ITagRepository {
	constructor(@Inject('Tag') private readonly tag: typeof TagEntity) {}
	getTags(offset: number, limit: number): Promise<Tag[]> {
		throw new Error('Method not implemented.')
	}
	getPostTags(offset: number, limit: number): Promise<Tag[]> {
		throw new Error('Method not implemented.')
	}
	async getPostByType(type: string): Promise<Tag> {
		return await this.tag.findOne({ where: { type: type } })
	}
	async createTag(type: string, transactionHost: object): Promise<Tag> {
		return await this.tag.create<TagEntity>(
			{
				type: type,
			},
			transactionHost
		)
	}
	updateTag(dto: UpdateTagDto, tagId: number): Promise<Tag> {
		throw new Error('Method not implemented.')
	}
	deleteTag(tagId: number): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
