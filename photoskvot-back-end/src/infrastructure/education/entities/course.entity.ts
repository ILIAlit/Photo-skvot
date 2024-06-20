import {
	BelongsToMany,
	Column,
	DataType,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'
import { LessonEntity } from './lesson.entity'
import { UserCourseEntity } from './user-course.entity'

@Table({ tableName: 'course' })
export class CourseEntity extends Model<CourseEntity, any> {
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
	price: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description: string

	@HasMany(() => LessonEntity)
	steps: LessonEntity[]

	@BelongsToMany(() => UserEntity, () => UserCourseEntity)
	users: UserEntity[]
}
