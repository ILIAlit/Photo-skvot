import { IUserCreateAttr } from 'src/domain/adapters/entity/user/userCreateAttr.interface'

export class CreateUserDto implements IUserCreateAttr {
	name: string
	email: string
	password: string
}
