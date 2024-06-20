import { User } from 'src/domain/models/user/user'
import { CreateUserDto } from 'src/infrastructure/users/dto/create-user.dto'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'

export interface IUserRepository {
	getUsers(): Promise<User[]>
	createUser(userDto: CreateUserDto, profileId: number): Promise<User>
	getUserByEmail(email: string): Promise<User>
	getUserByName(name: string): Promise<User>
	getUserById(id: number): Promise<User>
	getUserEntityById(id: number): Promise<UserEntity>
	banUser(userId: number): Promise<User>
}
