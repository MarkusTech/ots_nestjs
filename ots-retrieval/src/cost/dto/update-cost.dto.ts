import { PartialType } from '@nestjs/swagger';
import { CreateCostDto } from './create-cost.dto';

export class UpdateCostDto extends PartialType(CreateCostDto) {}
