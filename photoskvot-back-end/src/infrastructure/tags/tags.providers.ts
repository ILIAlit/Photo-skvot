import { TagEntity } from './entities/tag.entity'
import { TagRepository } from './tags.repository'

export const tagProviders = [
	{ provide: 'ITagRepository', useClass: TagRepository },
	{ provide: 'Tag', useValue: TagEntity },
]
