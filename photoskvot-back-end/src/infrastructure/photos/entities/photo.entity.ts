import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { IPhotoCreateAttr } from 'src/domain/adapters/entity/photo/photo-create-attr.interface'
import { Photo } from 'src/domain/models/photo/photo'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'

@Table({ tableName: 'photos' })
export class PhotoEntity
	extends Model<PhotoEntity, IPhotoCreateAttr>
	implements Photo
{
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	alt: string

	@Column({ type: DataType.STRING, allowNull: false })
	src: string

	@ForeignKey(() => PostEntity)
	@Column({ type: DataType.INTEGER, unique: true })
	post_id: number

	@BelongsTo(() => PostEntity)
	post: PostEntity
}
