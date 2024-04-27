import {
	BelongsTo,
	BelongsToMany,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript'
import { IPostCreateAttr } from 'src/domain/adapters/entity/post/post-create-attr.interface'
import { Post } from 'src/domain/models/post/post'
import { FavoriteEntity } from 'src/infrastructure/favorites/entities/favorite.entity'
import { LikeEntity } from 'src/infrastructure/likes/entities/like.entity'
import { PhotoEntity } from 'src/infrastructure/photos/entities/photo.entity'
import { PostSettingEntity } from 'src/infrastructure/post-settings/entities/post-setting.entity'
import { TagEntity } from 'src/infrastructure/tags/entities/tag.entity'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'
import { TagPostEntity } from './tag-post.entity'

@Table({ tableName: 'posts' })
export class PostEntity
	extends Model<PostEntity, IPostCreateAttr>
	implements Post
{
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({ type: DataType.STRING, allowNull: false })
	title: string

	@Column({ type: DataType.STRING, defaultValue: null })
	description: string

	@ForeignKey(() => UserEntity)
	@Column({ type: DataType.INTEGER })
	user_id: number

	@BelongsTo(() => UserEntity)
	user: UserEntity

	@HasOne(() => PhotoEntity)
	photo: PhotoEntity

	@HasOne(() => PostSettingEntity)
	post_settings: PostSettingEntity

	@BelongsToMany(() => TagEntity, () => TagPostEntity)
	tags: TagEntity[]

	@HasMany(() => LikeEntity)
	likes: LikeEntity[]

	@HasMany(() => FavoriteEntity)
	favorites: FavoriteEntity[]
}
