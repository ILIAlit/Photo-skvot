import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { LikesController } from './likes.controller'
import { likeProviders } from './likes.providers'
import { LikesService } from './likes.service'

@Module({
	imports: [AuthModule, JwtModule],
	controllers: [LikesController],
	providers: [LikesService, ...likeProviders],
})
export class LikesModule {}
