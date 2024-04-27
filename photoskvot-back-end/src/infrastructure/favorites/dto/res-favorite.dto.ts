export class ResFavoriteDto {
	constructor(isFavorite: boolean = false) {
		this.isFavorite = isFavorite
	}

	isFavorite: boolean
}
