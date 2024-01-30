import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UomService } from './uom.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';

@Controller('uom')
export class UomController {
  constructor(private readonly uomService: UomService) {}

  @Get(':grpCode')
  async findBy(@Param('grpCode') grpCode: string){
    return await this.uomService.findAll(grpCode);
  }
}
