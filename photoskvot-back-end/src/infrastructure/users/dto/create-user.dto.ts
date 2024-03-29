import { ApiProperty } from '@nestjs/swagger'
import { IUserCreateAttr } from 'src/domain/adapters/entity/user/user-create-attr.interface'

export class CreateUserDto implements IUserCreateAttr {
	@ApiProperty({
		description: 'user name',
		nullable: false,
		example: 'User Name',
	})
	name: string
	@ApiProperty({
		description: 'user email',
		nullable: false,
		example: 'example@example.com',
	})
	email: string
	@ApiProperty({
		description: 'user password',
		nullable: false,
		example: 'exampleUserPassword123',
	})
	password: string
}
