import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransacDetailsService } from './transac_details.service';
import { CreateTransacDetailDto } from './dto/create-transac_detail.dto';
import { UpdateTransacDetailDto } from './dto/update-transac_detail.dto';

@Controller('transac-details')
export class TransacDetailsController {
  constructor(private readonly transacDetailsService: TransacDetailsService) {}

  @Post()
  create(@Body() createTransacDetailDto: CreateTransacDetailDto) {
    return this.transacDetailsService.create(createTransacDetailDto);
  }

  @Get()
  findAll() {
    return this.transacDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransacDetailDto: UpdateTransacDetailDto,
  ) {
    return this.transacDetailsService.update(+id, updateTransacDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacDetailsService.remove(+id);
  }
}
