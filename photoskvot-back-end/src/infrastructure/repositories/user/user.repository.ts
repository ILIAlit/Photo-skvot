import { Injectable } from '@nestjs/common'
import { User } from 'src/domain/model/user'
import { iUserRepository } from 'src/domain/repositories/iUserRepository.interface'

@Injectable()
export class UserRepository implements iUserRepository {
	getUsers(): User {
		return new User()
	}
	createUser(user: User): User {
		throw new Error('Method not implemented.')
	}
}
