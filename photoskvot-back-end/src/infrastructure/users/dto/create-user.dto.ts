import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'
import { IUserCreateAttr } from 'src/domain/adapters/entity/user/user-create-attr.interface'

export class CreateUserDto implements IUserCreateAttr {
	@IsString({ message: 'Не является строкой!' })
	@ApiProperty({
		description: 'user name',
		nullable: false,
		example: 'User Name',
	})
	@IsString({ message: 'Не является строкой!' })
	name: string
	@ApiProperty({
		description: 'user email',
		nullable: false,
		example: 'example@example.com',
	})
	@IsString({ message: 'Не является строкой!' })
	@IsEmail({}, { message: 'Некорректный email!' })
	email: string
	@ApiProperty({
		description: 'user password',
		nullable: false,
		example: 'exampleUserPassword123',
	})
	password: string
}
