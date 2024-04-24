import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { TagEntity } from 'src/infrastructure/tags/entities/tag.entity'
import { PostEntity } from './post.entity'

@Table({ tableName: 'tag_post', createdAt: false, updatedAt: false })
export class TagPostEntity extends Model {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => TagEntity)
	@Column({ type: DataType.INTEGER })
	tagId: number

	@ForeignKey(() => PostEntity)
	@Column({ type: DataType.INTEGER })
	postId: number
}
