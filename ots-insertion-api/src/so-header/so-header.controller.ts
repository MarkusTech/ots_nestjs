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

  @Get(':user')
  async findBy(@Param('user') user: string){
    return await this.soHeaderService.find(user);
  }

  @Get()
  async findAll(){
    return await this.soHeaderService.findAll();
  }

  @Patch(':DraftNum')
  update(@Param('DraftNum') DraftNum: number, @Body() UpdateSoHeaderDto: UpdateSoHeaderDto) {
    return this.soHeaderService.update(UpdateSoHeaderDto, DraftNum);
  }
}
