import { IUserLoginAttr } from 'src/domain/adapters/entity/user/userLoginAttr.interface'

export class LoginUserDto implements IUserLoginAttr {
	name: string
	password: string
}
