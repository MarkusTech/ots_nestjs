import { PartialType } from '@nestjs/swagger';
import { CreateDiscountPriceDto } from './create-discount-price.dto';

export class UpdateDiscountPriceDto extends PartialType(CreateDiscountPriceDto) {}
