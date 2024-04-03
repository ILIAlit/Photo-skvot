import { Controller, Get, HttpStatus, Query, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/domain/models/user/user'
import { Roles } from '../auth/decorators/roles-auth.decorator'
import { RoleGuard } from '../auth/guards/roles.guard'
import { BanUserParams } from './dto/ban-user-params.dto'
import { UsersService } from './users.service'

@ApiTags('User')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({
		status: HttpStatus.OK,
		type: [User],
	})
	@Roles('admin')
	@UseGuards(RoleGuard)
	@Get()
	async findAll(): Promise<User[]> {
		return await this.usersService.getUsers()
	}

	@ApiOperation({ summary: 'Ban user' })
	@ApiResponse({ status: 200, type: User })
	@ApiQuery({ name: 'id', description: 'user id' })
	@Roles('admin')
	@UseGuards(RoleGuard)
	@Get('ban-user')
	async ban(@Query() { id: userId }: BanUserParams): Promise<User> {
		return await this.usersService.banUser(userId)
	}
}
