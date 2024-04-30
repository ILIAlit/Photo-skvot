import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { ICommentCreateAttr } from 'src/domain/adapters/entity/comment/comment-create-attr.interface'
import { Comment } from 'src/domain/models/comment/comment'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

@Table({ tableName: 'comments' })
export class CommentEntity
	extends Model<CommentEntity, ICommentCreateAttr>
	implements Comment
{
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
	text: string

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
