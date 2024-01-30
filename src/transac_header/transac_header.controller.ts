import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransacHeaderService } from './transac_header.service';
import { AddTransHeader } from './dto/queries/add-transacheader';

@Controller('transac-header')
export class TransacHeaderController {
  constructor(private readonly transacHeaderService: TransacHeaderService) {}

  @Post()
  create(@Body() createTransacHeaderDto: AddTransHeader) {
    return this.transacHeaderService.create(createTransacHeaderDto);
  }

  @Get()
  findAll() {
    return this.transacHeaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacHeaderService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTransacHeaderDto: UpdateTransacHeaderDto,
  // ) {
  //   return this.transacHeaderService.update(+id, updateTransacHeaderDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacHeaderService.remove(+id);
  }
}
