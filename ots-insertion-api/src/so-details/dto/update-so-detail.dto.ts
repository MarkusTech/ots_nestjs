import { PartialType } from '@nestjs/mapped-types';
import { CreateSoDetailDto } from './create-so-detail.dto';

export class UpdateSoDetailDto extends PartialType(CreateSoDetailDto) {}
