import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoDetailsService } from './so-details.service';
import { CreateSoDetailDto } from './dto/create-so-detail.dto';
import { UpdateSoDetailDto } from './dto/update-so-detail.dto';

@Controller('so-details')
export class SoDetailsController {
  constructor(private readonly soDetailsService: SoDetailsService) {}

  @Post()
  create(@Body() createSoDetailDto: CreateSoDetailDto) {
    return this.soDetailsService.create(createSoDetailDto);
  }

}
