import {
	Column,
	DataType,
	HasMany,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript'
import { IUserCreateAttr } from 'src/domain/adapters/entity/user/user-create-attr.interface'
import { User, UserRole } from 'src/domain/models/user/user'
import { CommentEntity } from 'src/infrastructure/comments/entities/comment.entity'
import { FavoriteEntity } from 'src/infrastructure/favorites/entities/favorite.entity'
import { LikeEntity } from 'src/infrastructure/likes/entities/like.entity'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'
import { ProfileEntity } from 'src/infrastructure/profile/entity/profile.entity'

@Table({ tableName: 'users' })
export class UserEntity
	extends Model<UserEntity, IUserCreateAttr>
	implements User
{
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	name: string

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string

	@Column({ type: DataType.STRING, allowNull: false })
	password: string

	@Column({
		type: DataType.ENUM,
		values: ['admin', 'user'],
		allowNull: false,
		defaultValue: 'user',
	})
	role: UserRole

	@Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
	isBaned: boolean

	@HasOne(() => ProfileEntity)
	profile: ProfileEntity

	@HasMany(() => PostEntity)
	posts: PostEntity[]

	@HasMany(() => LikeEntity)
	likes: LikeEntity[]

	@HasMany(() => FavoriteEntity)
	favorites: FavoriteEntity[]

	@HasMany(() => CommentEntity)
	comments: CommentEntity[]
}
