import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { IUserRepository } from 'src/domain/repositories/user/userRepository.interface'
import { ProfileService } from '../profile/profile.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
	constructor(
		@Inject('IUserRepository') private readonly userRepository: IUserRepository,
		private readonly profileService: ProfileService
	) {}

	async getUsers(): Promise<User[]> {
		return await this.userRepository.getUsers()
	}

	async createUser(userDto: CreateUserDto): Promise<User> {
		const profile = await this.profileService.createProfile()
		const user = await this.userRepository.createUser(userDto, profile.id)
		return user
	}

	async getUserByEmail(email: string): Promise<User> {
		return await this.userRepository.getUserByEmail(email)
	}

	async getUserByName(name: string): Promise<User> {
		return await this.userRepository.getUserByName(name)
	}
}
