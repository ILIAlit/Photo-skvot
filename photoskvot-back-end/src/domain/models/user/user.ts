import { ApiProperty } from '@nestjs/swagger'

export enum UserRole {
	Admin = 'admin',
	User = 'user',
}

export class User {
	@ApiProperty({ description: 'user id', nullable: false, example: 0 })
	id: number
	@ApiProperty({
		description: 'user name',
		nullable: false,
		example: 'ExampleName',
	})
	name: string
	@ApiProperty({
		description: 'user email',
		nullable: false,
		example: 'example@gmail.com',
	})
	email: string
	@ApiProperty({
		description: 'user password',
		nullable: false,
		example: 'examplePassword123',
	})
	password: string
	@ApiProperty({
		description: 'user role',
		nullable: false,
		example: UserRole.Admin,
	})
	role: UserRole
	@ApiProperty({
		description: 'user iss baned',
		nullable: false,
		example: 'false',
	})
	isBaned: boolean
}
