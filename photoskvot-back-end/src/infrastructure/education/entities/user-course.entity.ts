import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'
import { CourseEntity } from './course.entity'

@Table({ tableName: 'user_course', createdAt: false, updatedAt: false })
export class UserCourseEntity extends Model {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => UserEntity)
	@Column({ type: DataType.INTEGER })
	userId: number

	@ForeignKey(() => CourseEntity)
	@Column({ type: DataType.INTEGER })
	courseId: number
}
