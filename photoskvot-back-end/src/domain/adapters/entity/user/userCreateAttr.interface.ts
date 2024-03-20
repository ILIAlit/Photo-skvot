import { UserRole } from 'src/domain/models/user/user'

export interface iUserCreateAttr {
	name: string
	email: string
	password: string
	role: UserRole
}
