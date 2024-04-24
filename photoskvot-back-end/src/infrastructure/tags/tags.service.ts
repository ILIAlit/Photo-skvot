import { Inject, Injectable } from '@nestjs/common'
import { ITagRepository } from 'src/domain/repositories/tag/tagRepository.repository'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'

@Injectable()
export class TagsService {
	constructor(
		@Inject('ITagRepository') private readonly tagRepository: ITagRepository
	) {}
	async create(createTagDto: CreateTagDto, transactionHost: object) {
		const types = createTagDto.types
		return Promise.all(
			types.map(async type => {
				let tag = await this.tagRepository.getPostByType(type)
				if (!tag) {
					tag = await this.tagRepository.createTag(type, transactionHost)
					await createTagDto.post.$set('tags', [tag.id], transactionHost)
					return tag
				}
				await createTagDto.post.$set('tags', [tag.id], transactionHost)
				return tag
			})
		)
	}

	async findAll(offset: number, limit: number) {
		return await this.tagRepository.getTags(offset, limit)
	}

	async findPostTags(id: number, offset: number, limit: number) {
		return await this.tagRepository.getPostTags(id, offset, limit)
	}

	async update(id: number, updateTagDto: UpdateTagDto) {
		return await this.tagRepository.updateTag(updateTagDto, id)
	}

	async remove(id: number) {
		return await this.tagRepository.deleteTag(id)
	}
}
