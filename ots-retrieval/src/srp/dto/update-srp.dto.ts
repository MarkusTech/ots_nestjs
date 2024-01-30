import { PartialType } from '@nestjs/swagger';
import { CreateSrpDto } from './create-srp.dto';

export class UpdateSrpDto extends PartialType(CreateSrpDto) {}
