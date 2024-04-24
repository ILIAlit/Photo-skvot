import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { DatabaseModule } from '../database/database.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { TagsController } from './tags.controller'
import { tagProviders } from './tags.providers'
import { TagsService } from './tags.service'

@Module({
	imports: [AuthModule, JwtModule, DatabaseModule],
	controllers: [TagsController],
	providers: [TagsService, ...tagProviders],
	exports: [TagsService],
})
export class TagsModule {}
