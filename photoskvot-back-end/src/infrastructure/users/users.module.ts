import { Module, forwardRef } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { DatabaseModule } from '../database/database.module'
import { ProfileModule } from '../profile/profile.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { UsersController } from './users.controller'
import { userProviders } from './users.providers'
import { UsersService } from './users.service'

@Module({
	imports: [
		DatabaseModule,
		ProfileModule,
		forwardRef(() => AuthModule),
		JwtModule,
	],
	controllers: [UsersController],
	providers: [UsersService, ...userProviders],
	exports: [UsersService],
})
export class UsersModule {}
