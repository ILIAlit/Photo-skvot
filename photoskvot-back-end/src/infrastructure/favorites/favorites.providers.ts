import { FavoriteEntity } from './entities/favorite.entity'
import { FavoriteRepository } from './favorites.repository'

export const favoritesProviders = [
	{ provide: 'IFavoriteRepository', useClass: FavoriteRepository },
	{ provide: 'Favorite', useValue: FavoriteEntity },
]
