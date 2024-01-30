import { PartialType } from '@nestjs/swagger';
import { CreateWarehouseSohDto } from './create-warehouse-soh.dto';

export class UpdateWarehouseSohDto extends PartialType(CreateWarehouseSohDto) {}
