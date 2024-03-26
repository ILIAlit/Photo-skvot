import { forwardRef, Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { DatabaseModule } from '../database/database.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { ProfileController } from './profile.controller'
import { profileProviders } from './profile.providers'
import { ProfileService } from './profile.service'

@Module({
	imports: [DatabaseModule, forwardRef(() => AuthModule), JwtModule],
	controllers: [ProfileController],
	providers: [ProfileService, ...profileProviders],
	exports: [ProfileService],
})
export class ProfileModule {}
