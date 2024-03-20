import { iUserCreateAttr } from 'src/domain/adapters/entity/user/userCreateAttr.interface'
import { UserRole } from 'src/domain/models/user/user'

export class CreateUserDto implements iUserCreateAttr {
	name: string
	email: string
	password: string
	role: UserRole
}
