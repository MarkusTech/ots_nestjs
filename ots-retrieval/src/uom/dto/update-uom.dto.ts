import { PartialType } from '@nestjs/mapped-types';
import { CreateUomDto } from './create-uom.dto';

export class UpdateUomDto extends PartialType(CreateUomDto) {}
