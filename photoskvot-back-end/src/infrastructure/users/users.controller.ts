import { Controller, Get, HttpStatus } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/domain/models/user/user'
import { UsersService } from './users.service'

@ApiTags('User')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@Get()
	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({
		status: HttpStatus.OK,
		type: [User],
	})
	async getUsers(): Promise<User[]> {
		return await this.usersService.getUsers()
	}
}
