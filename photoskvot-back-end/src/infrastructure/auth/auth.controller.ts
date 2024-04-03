import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ResponseErrorValidation } from '../common/pipes/validation/dto/res-error-validation.dto'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { LoginUserDto } from '../users/dto/login-user-dto'
import { AuthService } from './auth.service'
import { ResponseAuthDto } from './dto/response-auth.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	@ApiOperation({ summary: 'Login user' })
	@ApiResponse({ status: 200, type: ResponseAuthDto })
	@ApiResponse({ status: 400, type: ResponseErrorValidation })
	async login(@Body() loginUserDto: LoginUserDto): Promise<ResponseAuthDto> {
		return await this.authService.login(loginUserDto)
	}

	@Post('register')
	@ApiOperation({ summary: 'Register user' })
	@ApiResponse({ status: 200, type: ResponseAuthDto })
	@ApiResponse({ status: 400, type: ResponseErrorValidation })
	async register(
		@Body() createUserDto: CreateUserDto
	): Promise<ResponseAuthDto> {
		return await this.authService.register(createUserDto)
	}
}
