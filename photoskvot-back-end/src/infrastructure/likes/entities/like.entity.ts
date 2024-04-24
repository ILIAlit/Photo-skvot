import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { ILikeCreateAttr } from 'src/domain/adapters/entity/like/like-create-attr.interface'
import { Like } from 'src/domain/models/like/like'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

@Table({ tableName: 'likes' })
export class LikeEntity
	extends Model<LikeEntity, ILikeCreateAttr>
	implements Like
{
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => PostEntity)
	@Column({ type: DataType.INTEGER })
	post_id: number

	@BelongsTo(() => PostEntity)
	post: PostEntity

	@ForeignKey(() => UserEntity)
	@Column({ type: DataType.INTEGER })
	user_id: number

	@BelongsTo(() => UserEntity)
	user: UserEntity
}
