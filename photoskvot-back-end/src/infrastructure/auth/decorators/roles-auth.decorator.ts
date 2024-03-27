import { SetMetadata } from '@nestjs/common'

export const ROLE_KEY = 'role'
export const Roles = (role: string) => {
	return SetMetadata(ROLE_KEY, role)
}
