import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { UserRole } from 'src/domain/models/user/user'

@Table({ tableName: 'users' })
export class UserEntity extends Model {
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
}
