import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { JwtModule } from '../services/jwt/jwt.module'
import { FavoritesController } from './favorites.controller'
import { favoritesProviders } from './favorites.providers'
import { FavoritesService } from './favorites.service'

@Module({
	imports: [AuthModule, JwtModule],
	controllers: [FavoritesController],
	providers: [FavoritesService, ...favoritesProviders],
})
export class FavoritesModule {}
