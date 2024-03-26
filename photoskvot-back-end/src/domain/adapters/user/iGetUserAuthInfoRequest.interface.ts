import { Request } from 'express'
import { User } from 'src/domain/models/user/user'

export interface IGetUserAuthInfoRequest extends Request {
	user: Promise<User>
}
