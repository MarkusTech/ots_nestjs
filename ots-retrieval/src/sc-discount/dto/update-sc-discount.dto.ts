import { PartialType } from '@nestjs/swagger';
import { CreateScDiscountDto } from './create-sc-discount.dto';

export class UpdateScDiscountDto extends PartialType(CreateScDiscountDto) {}
