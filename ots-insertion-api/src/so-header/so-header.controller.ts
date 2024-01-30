import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoHeaderService } from './so-header.service';
import { CreateSoHeaderDto } from './dto/create-so-header.dto';
import { UpdateSoHeaderDto } from './dto/update-so-header.dto';

@Controller('so-header')
export class SoHeaderController {
  constructor(private readonly soHeaderService: SoHeaderService) {}

  @Post()
  create(@Body() createSoHeaderDto: CreateSoHeaderDto) {
    return this.soHeaderService.create(createSoHeaderDto);
  }
}
