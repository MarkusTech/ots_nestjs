import { PartialType } from '@nestjs/swagger';
import { CreateTaxRateDto } from './create-tax-rate.dto';

export class UpdateTaxRateDto extends PartialType(CreateTaxRateDto) {}
