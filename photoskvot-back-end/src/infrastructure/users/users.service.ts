import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/domain/model/user'
import { iUserRepository } from 'src/domain/repositories/iUserRepository.interface'

@Injectable()
export class UsersService {
	constructor(
		@Inject('iUserRepository') private readonly userRepository: iUserRepository
	) {}

	getUsers(): User {
		return this.userRepository.getUsers()
	}
}
