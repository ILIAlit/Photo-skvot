import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { CourseEntity } from './course.entity'

@Table({ tableName: 'lesson' })
export class LessonEntity extends Model<LessonEntity, any> {
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

	@Column({
		type: DataType.STRING,
		defaultValue: null,
	})
	imgSrc: string

	@Column({
		type: DataType.STRING,
		defaultValue: null,
	})
	videoLink: string

	@Column({
		type: DataType.STRING,
		defaultValue: null,
	})
	materialLink: string

	@ForeignKey(() => CourseEntity)
	@Column({ type: DataType.INTEGER })
	course_id: number

	@BelongsTo(() => CourseEntity)
	course: CourseEntity
}
