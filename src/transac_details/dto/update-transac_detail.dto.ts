import { PartialType } from '@nestjs/swagger';
import { CreateTransacDetailDto } from './create-transac_detail.dto';

export class UpdateTransacDetailDto extends PartialType(CreateTransacDetailDto) {}
