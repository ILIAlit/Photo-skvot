import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { IPostSettingsCreateAttr } from 'src/domain/adapters/entity/post-settings/post-settings-create-attr.interface'
import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'

@Table({ tableName: 'post_settings' })
export class PostSettingEntity
	extends Model<PostSettingEntity, IPostSettingsCreateAttr>
	implements PostSettings
{
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({ type: DataType.STRING, allowNull: true })
	iso: number

	@Column({ type: DataType.STRING, allowNull: true })
	shutter_speed: string

	@Column({ type: DataType.STRING, allowNull: true })
	aperture: string

	@Column({ type: DataType.STRING, allowNull: true })
	instrument: string

	@ForeignKey(() => PostEntity)
	@Column({ type: DataType.INTEGER, unique: true })
	post_id: number

	@BelongsTo(() => PostEntity)
	post: PostEntity
}
