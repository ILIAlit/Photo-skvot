import { UserRole } from 'src/domain/models/user/user'

export class TokenAuthDto {
	id: number
	name: string
	role: UserRole
	isBaned: boolean
}
