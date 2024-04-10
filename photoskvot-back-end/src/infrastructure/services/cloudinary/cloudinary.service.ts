import { Injectable } from '@nestjs/common'
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary'
import { CLOUDINARY_UPLOAD_DIRECTORY } from 'src/domain/constants'
import toStream = require('buffer-to-stream')

@Injectable()
export class CloudinaryService {
	async uploadImage(
		file: Express.Multer.File
	): Promise<UploadApiResponse | UploadApiErrorResponse> {
		return new Promise((resolve, reject) => {
			const upload = v2.uploader.upload_stream(
				{ folder: CLOUDINARY_UPLOAD_DIRECTORY },
				(error, result) => {
					if (error) {
						reject(error)
					} else {
						resolve(result)
					}
				}
			)
			toStream(file.buffer).pipe(upload)
		})
	}
}
