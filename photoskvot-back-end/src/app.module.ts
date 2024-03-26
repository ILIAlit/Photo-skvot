import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './infrastructure/auth/auth.module'
import { ProfileModule } from './infrastructure/profile/profile.module'
import { UsersModule } from './infrastructure/users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		UsersModule,
		AuthModule,
		ProfileModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
