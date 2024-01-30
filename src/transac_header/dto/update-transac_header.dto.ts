import { PartialType } from '@nestjs/swagger';
import { TransacHeaderDto } from './create-transac_header.dto';

export class UpdateTransacHeaderDto extends PartialType(TransacHeaderDto) {}
