import { User } from '../model/user'

export interface iUserRepository {
	getUsers(): User
	createUser(user: User): User
}
