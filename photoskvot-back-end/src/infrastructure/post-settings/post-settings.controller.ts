import { Body, Controller, Get, Patch, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { PostSettings } from 'src/domain/models/post-settings/post-settings'
import { ResponseExceptionDto } from '../exceptions/dto/response-exception'
import { RequestQueryDto } from './dto/request-query.dto'
import { UpdatePostSettingDto } from './dto/update-post-setting.dto'
import { PostSettingsService } from './post-settings.service'

@ApiTags('Post-setting')
@Controller('post-settings')
export class PostSettingsController {
	constructor(private readonly postSettingsService: PostSettingsService) {}

	@ApiOperation({ summary: 'Get post settings' })
	@ApiResponse({ status: 200, type: PostSettings })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@Get()
	findOne(@Query() { postId }: RequestQueryDto) {
		return this.postSettingsService.findOne(+postId)
	}

	@ApiOperation({ summary: 'Update post settings' })
	@ApiResponse({ status: 200, type: PostSettings })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiQuery({ name: 'postId' })
	@Patch()
	update(
		@Query() { postId }: RequestQueryDto,
		@Body() updatePostSettingDto: UpdatePostSettingDto
	) {
		return this.postSettingsService.update(+postId, updatePostSettingDto)
	}
}
