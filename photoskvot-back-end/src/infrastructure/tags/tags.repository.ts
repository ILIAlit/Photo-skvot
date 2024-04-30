import { Inject } from '@nestjs/common'
import { Tag } from 'src/domain/models/tag/tag'
import { ITagRepository } from 'src/domain/repositories/tag/tagRepository.repository'
import { PostEntity } from '../posts/entities/post.entity'
import { TagEntity } from './entities/tag.entity'

export class TagRepository implements ITagRepository {
	constructor(@Inject('Tag') private readonly tag: typeof TagEntity) {}
	async getTags(offset: number, limit: number): Promise<Tag[]> {
		return await this.tag.findAll<TagEntity>({
			limit,
			offset,
		})
	}
	async getPostTags(postId: number): Promise<Tag[]> {
		return await this.tag.findAll<TagEntity>({
			include: [
				{
					model: PostEntity,
					where: { id: postId },
				},
			],
		})
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

	async deleteTag(tagId: number): Promise<number> {
		return await this.tag.destroy<TagEntity>({ where: { id: tagId } })
	}
}
