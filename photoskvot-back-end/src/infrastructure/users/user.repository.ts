import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { iUserRepository } from 'src/domain/repositories/user/userRepository.interface'
import { UserEntity } from 'src/infrastructure/users/entity/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserRepository implements iUserRepository {
	constructor(@Inject('User') private readonly user: typeof UserEntity) {}
	async getUsers(): Promise<User[]> {
		return await this.user.findAll<UserEntity>()
	}
	async createUser(userDto: CreateUserDto): Promise<User> {
		return await this.user.create<UserEntity>({ ...userDto })
	}

	async getUserByEmail(email: string): Promise<User> {
		return await this.user.findOne<UserEntity>({
			where: { email },
			include: { all: true },
		})
	}

	async getUserByName(name: string): Promise<User> {
		return await this.user.findOne<UserEntity>({
			where: { name },
			include: { all: true },
		})
	}
}
