import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { IUserRepository } from 'src/domain/repositories/user/userRepository.interface'
import { ProfileService } from '../profile/profile.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ResUserData } from './dto/res-user-data.dto'
import { UserEntity } from './entity/user.entity'

@Injectable()
export class UsersService {
	constructor(
		@Inject('IUserRepository') private readonly userRepository: IUserRepository,
		private readonly profileService: ProfileService
	) {}

	async getUsers(): Promise<User[]> {
		return await this.userRepository.getUsers()
	}

	async getUserData(userId: number): Promise<ResUserData> {
		const user = await this.getUserById(userId)
		const userProfile = await this.profileService.getProfile(userId)
		return {
			id: user.id,
			profile: userProfile,
			name: user.name,
		}
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

	async getUserById(id: number): Promise<User> {
		return await this.userRepository.getUserById(id)
	}

	async getUserEntityById(id: number): Promise<UserEntity> {
		return await this.userRepository.getUserEntityById(id)
	}

	async banUser(userId): Promise<User> {
		return await this.userRepository.banUser(userId)
	}
}
