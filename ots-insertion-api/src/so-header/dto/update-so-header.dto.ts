import { PartialType } from '@nestjs/mapped-types';
import { CreateSoHeaderDto } from './create-so-header.dto';

export class UpdateSoHeaderDto extends PartialType(CreateSoHeaderDto) {}
