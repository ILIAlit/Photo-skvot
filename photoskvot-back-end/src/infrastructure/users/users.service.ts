import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { iUserRepository } from 'src/domain/repositories/user/userRepository.interface'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
	constructor(
		@Inject('iUserRepository') private readonly userRepository: iUserRepository
	) {}

	async getUsers(): Promise<User[]> {
		return await this.userRepository.getUsers()
	}

	createUser(userDto: CreateUserDto): Promise<User> {
		return this.userRepository.createUser(userDto)
	}
}
