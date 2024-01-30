import { PartialType } from '@nestjs/swagger';
import { CreateLowerboundDto } from './create-lowerbound.dto';

export class UpdateLowerboundDto extends PartialType(CreateLowerboundDto) {}
