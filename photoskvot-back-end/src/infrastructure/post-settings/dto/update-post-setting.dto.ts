import { PartialType } from '@nestjs/swagger'
import { CreatePostSettingDto } from './create-post-setting.dto'

export class UpdatePostSettingDto extends PartialType(CreatePostSettingDto) {}
