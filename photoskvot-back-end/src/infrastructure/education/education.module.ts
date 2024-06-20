import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { DatabaseModule } from '../database/database.module'
import { CloudinaryModule } from '../services/cloudinary/cloudinary.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { UsersModule } from '../users/users.module'
import { EducationController } from './education.controller'
import { educationProviders } from './education.providers'
import { EducationService } from './education.service'

@Module({
	imports: [
		DatabaseModule,
		JwtModule,
		AuthModule,
		CloudinaryModule,
		UsersModule,
	],
	controllers: [EducationController],
	providers: [EducationService, ...educationProviders],
})
export class EducationModule {}
