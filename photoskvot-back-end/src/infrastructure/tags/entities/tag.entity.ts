import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from 'sequelize-typescript'
import { ITagCreateAttr } from 'src/domain/adapters/entity/tag/tag-create-attr.interface'
import { Tag } from 'src/domain/models/tag/tag'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'
import { TagPostEntity } from 'src/infrastructure/posts/entities/tag-post.entity'

@Table({ tableName: 'tags' })
export class TagEntity extends Model<TagEntity, ITagCreateAttr> implements Tag {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type: string

	@BelongsToMany(() => PostEntity, () => TagPostEntity)
	posts: PostEntity[]
}
