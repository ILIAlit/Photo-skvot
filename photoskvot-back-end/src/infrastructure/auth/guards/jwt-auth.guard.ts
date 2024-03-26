import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { JwtService } from '../../services/jwt/jwt.service'

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()
		try {
			const authHeader = request.headers.authorization
			if (!authHeader) {
				throw new UnauthorizedException({
					message: 'Пользователь не авторизован',
				})
			}
			const token = authHeader.split(' ')[1]
			if (!token) {
				throw new UnauthorizedException({
					message: 'Пользователь не авторизован',
				})
			}
			const user = this.jwtService.verifyToken(token)
			request.user = user
			return true
		} catch (err) {
			throw new UnauthorizedException({
				message: 'Пользователь не авторизован',
			})
		}
	}
}
