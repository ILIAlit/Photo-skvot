import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
	async createFile(file: any): Promise<string> {
		try {
			const fileName = uuid.v4() + path.extname(file.originalname)
			const filePath = path.join(__dirname, '..', '..', 'uploads', fileName)
			await fs.promises.mkdir(path.join(__dirname, '..', '..', 'uploads'), {
				recursive: true,
			})
			await fs.promises.writeFile(filePath, file.buffer)
			return fileName
		} catch (err) {
			throw new HttpException(
				'Ошибка записи файла!',
				HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
	}
}
