import { ApiProperty } from '@nestjs/swagger'

export class LoginUserDto {
	@ApiProperty({
		description: 'user name',
		nullable: false,
		example: 'ExampleUserName',
	})
	name: string
	@ApiProperty({
		description: 'user password',
		nullable: false,
		example: 'ExampleUserPassword123',
	})
	password: string
}
