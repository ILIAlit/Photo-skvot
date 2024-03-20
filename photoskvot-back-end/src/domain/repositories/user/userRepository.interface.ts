import { User } from 'src/domain/models/user/user'
import { CreateUserDto } from 'src/infrastructure/users/dto/create-user.dto'

export interface iUserRepository {
	getUsers(): Promise<User[]>
	createUser(userDto: CreateUserDto): Promise<User>
}
