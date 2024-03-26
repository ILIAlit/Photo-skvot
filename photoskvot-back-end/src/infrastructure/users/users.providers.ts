import { UserEntity } from './entity/user.entity'
import { UserRepository } from './user.repository'

export const userProviders = [
	{ provide: 'IUserRepository', useClass: UserRepository },
	{ provide: 'User', useValue: UserEntity },
]
