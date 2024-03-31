import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class LoginUserDto {
	@ApiProperty({
		description: 'user name',
		nullable: false,
		example: 'ExampleUserName',
	})
	@IsString({ message: 'Не является строкой!' })
	name: string
	@ApiProperty({
		description: 'user password',
		nullable: false,
		example: 'ExampleUserPassword123',
	})
	@IsString({ message: 'Не является строкой!' })
	password: string
}
