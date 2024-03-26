import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

@Table({ tableName: 'profiles' })
export class ProfileEntity extends Model {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({ type: DataType.STRING, defaultValue: null })
	avatar: string

	@Column({ type: DataType.STRING, defaultValue: null })
	status: string

	@Column({ type: DataType.STRING, defaultValue: null })
	about: string

	@Column({ type: DataType.STRING, defaultValue: null })
	social_link: string

	@ForeignKey(() => UserEntity)
	@Column({ type: DataType.INTEGER })
	user_id: number

	@BelongsTo(() => UserEntity)
	user: UserEntity
}
