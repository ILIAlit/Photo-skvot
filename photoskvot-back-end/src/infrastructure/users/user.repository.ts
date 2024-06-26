import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { IUserRepository } from 'src/domain/repositories/user/userRepository.interface'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserRepository implements IUserRepository {
	constructor(@Inject('User') private readonly user: typeof UserEntity) {}
	async getUsers(): Promise<User[]> {
		return await this.user.findAll<UserEntity>()
	}
	async createUser(userDto: CreateUserDto, profileId: number): Promise<User> {
		const user = await this.user.create<UserEntity>({ ...userDto })
		await user.$set('profile', [profileId])
		return user
	}

	async getUserByEmail(email: string): Promise<User> {
		return await this.user.findOne<UserEntity>({
			where: { email },
		})
	}

	async getUserByName(name: string): Promise<User> {
		return await this.user.findOne<UserEntity>({
			where: { name },
		})
	}

	async getUserById(id: number): Promise<User> {
		return await this.user.findByPk(id)
	}

	async getUserEntityById(id: number): Promise<UserEntity> {
		return await this.user.findByPk(id)
	}

	async banUser(userId): Promise<User> {
		const user = await this.user.findByPk(userId)
		return await user.update({
			isBaned: true,
		})
	}
}
