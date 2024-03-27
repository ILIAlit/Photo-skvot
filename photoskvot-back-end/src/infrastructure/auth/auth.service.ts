import {
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { User } from 'src/domain/models/user/user'
import { BcryptService } from '../services/bcrypt/bcrypt.service'
import { JwtService } from '../services/jwt/jwt.service'
import { LoginUserDto } from '../users/dto/login-user-dto'
import { UsersService } from '../users/users.service'
import { ResponseAuthDto } from './dto/response-auth.dto'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly bcryptService: BcryptService,
		private readonly jwtService: JwtService
	) {}

	async login(loginUserDto): Promise<ResponseAuthDto> {
		const candidate = await this.userService.getUserByName(loginUserDto.name)
		if (!candidate) {
			throw new HttpException(
				'Пользователь с таким логином не существует!',
				HttpStatus.BAD_REQUEST
			)
		}
		if (candidate.isBaned) {
			throw new HttpException('Пользователь забанен!', HttpStatus.FORBIDDEN)
		}
		const user = await this.validateUser(loginUserDto, candidate)
		return this.jwtService.generateToken(user)
	}

	async register(createUserDto): Promise<ResponseAuthDto> {
		const emailCandidate = await this.userService.getUserByEmail(
			createUserDto.email
		)
		if (emailCandidate) {
			throw new HttpException(
				'Пользователь с таким email существует!',
				HttpStatus.BAD_REQUEST
			)
		}
		const nameCandidate = await this.userService.getUserByName(
			createUserDto.name
		)
		if (nameCandidate) {
			throw new HttpException(
				'Пользователь с таким именем существует!',
				HttpStatus.BAD_REQUEST
			)
		}
		const hashPassword = await this.bcryptService.hashPassword(
			createUserDto.password
		)
		const user = await this.userService.createUser({
			...createUserDto,
			password: hashPassword,
		})
		return this.jwtService.generateToken(user)
	}

	private async validateUser(loginUserDto: LoginUserDto, user: User) {
		const passwordEquals = await this.bcryptService.comparePassword(
			loginUserDto.password,
			user.password
		)
		if (user && passwordEquals) {
			return user
		}
		throw new UnauthorizedException({
			message: 'Некорректный логин или пароль!',
		})
	}
}
