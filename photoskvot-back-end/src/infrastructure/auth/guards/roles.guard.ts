import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { JwtService } from '../../services/jwt/jwt.service'
import { ROLE_KEY } from '../decorators/roles-auth.decorator'

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly reflector: Reflector
	) {}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const requiredRole = this.reflector.getAllAndOverride(ROLE_KEY, [
			context.getHandler(),
			context.getClass(),
		])
		if (!requiredRole) {
			return true
		}
		const request = context.switchToHttp().getRequest()
		try {
			const authHeader = request.headers.authorization
			if (!authHeader) {
				throw new HttpException(
					'Пользователь не авторизован',
					HttpStatus.UNAUTHORIZED
				)
			}
			const token = authHeader.split(' ')[1]
			if (!token) {
				throw new HttpException(
					'Пользователь не авторизован',
					HttpStatus.UNAUTHORIZED
				)
			}
			const user = this.jwtService.verifyToken(token)
			return user.role === requiredRole
		} catch (err) {
			throw new HttpException('Нет доступа!', HttpStatus.FORBIDDEN)
		}
	}
}
