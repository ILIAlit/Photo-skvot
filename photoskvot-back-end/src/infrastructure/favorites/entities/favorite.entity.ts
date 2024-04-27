import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { IFavoriteCreateAttr } from 'src/domain/adapters/entity/favorite/favorite-create-attr.interface'
import { Favorite } from 'src/domain/models/favorite/favorite'
import { PostEntity } from 'src/infrastructure/posts/entities/post.entity'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

@Table({ tableName: 'favorites' })
export class FavoriteEntity
	extends Model<FavoriteEntity, IFavoriteCreateAttr>
	implements Favorite
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
