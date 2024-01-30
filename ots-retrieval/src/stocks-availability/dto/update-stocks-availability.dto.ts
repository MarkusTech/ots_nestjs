import { PartialType } from '@nestjs/swagger';
import { CreateStocksAvailabilityDto } from './create-stocks-availability.dto';

export class UpdateStocksAvailabilityDto extends PartialType(CreateStocksAvailabilityDto) {}
