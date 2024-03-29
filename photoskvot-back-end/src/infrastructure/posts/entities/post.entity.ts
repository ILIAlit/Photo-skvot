import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Post } from 'src/domain/models/post/post'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

@Table({ tableName: 'posts' })
export class PostEntity extends Model implements Post {
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
}
