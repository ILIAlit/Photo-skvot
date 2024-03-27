import { ApiProperty } from '@nestjs/swagger'
import { IUserLoginAttr } from 'src/domain/adapters/entity/user/userLoginAttr.interface'

export class LoginUserDto implements IUserLoginAttr {
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
