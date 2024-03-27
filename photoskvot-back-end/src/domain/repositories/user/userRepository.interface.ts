import { User } from 'src/domain/models/user/user'
import { CreateUserDto } from 'src/infrastructure/users/dto/create-user.dto'

export interface IUserRepository {
	getUsers(): Promise<User[]>
	createUser(userDto: CreateUserDto, profileId: number): Promise<User>
	getUserByEmail(email: string): Promise<User>
	getUserByName(name: string): Promise<User>
	banUser(userId: number): Promise<User>
}
