import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './infrastructure/users/users.module'

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
