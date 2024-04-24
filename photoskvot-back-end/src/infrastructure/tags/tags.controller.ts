import {
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Query,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Tag } from 'src/domain/models/tag/tag'
import { Roles } from '../auth/decorators/roles-auth.decorator'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RoleGuard } from '../auth/guards/roles.guard'
import { ResponseExceptionDto } from './../exceptions/dto/response-exception'
import { FindAllQuery } from './dto/find-all-query.dto'
import { FindPostTagsQueryDto } from './dto/find-post-tags-query.dto'
import { ReqQueryDto } from './dto/req-query.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { TagsService } from './tags.service'

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
	constructor(private readonly tagsService: TagsService) {}

	@ApiOperation({ summary: 'Get tags' })
	@ApiResponse({ status: 200, type: [Tag] })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'offset', description: 'offset' })
	@ApiQuery({ name: 'limit', description: 'limit' })
	@Get()
	findAll(@Query() { offset, limit }: FindAllQuery) {
		return this.tagsService.findAll(offset, limit)
	}

	@ApiOperation({ summary: 'Get post tags' })
	@ApiResponse({ status: 200, type: [Tag] })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiQuery({ name: 'id', description: 'post id' })
	@Get('get-post-tags')
	findPostTags(@Query() { id, offset, limit }: FindPostTagsQueryDto) {
		return this.tagsService.findPostTags(+id, offset, limit)
	}

	@ApiOperation({ summary: 'Update tag' })
	@ApiResponse({ status: 200, type: Tag })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Roles('admin')
	@UseGuards(RoleGuard)
	@ApiQuery({ name: 'id', description: 'tag id' })
	@Patch()
	update(@Query() { id }: ReqQueryDto, @Body() updateTagDto: UpdateTagDto) {
		return this.tagsService.update(+id, updateTagDto)
	}

	@ApiOperation({ summary: 'Delete tag' })
	@ApiResponse({ status: 200, type: Tag })
	@ApiResponse({ status: 400, type: ResponseExceptionDto })
	@ApiResponse({ status: 401, type: ResponseExceptionDto })
	@ApiResponse({ status: 403, type: ResponseExceptionDto })
	@UseGuards(JwtAuthGuard)
	@Roles('admin')
	@UseGuards(RoleGuard)
	@ApiQuery({ name: 'id', description: 'tag id' })
	@Delete()
	remove(@Query() { id }: ReqQueryDto) {
		return this.tagsService.remove(+id)
	}
}
