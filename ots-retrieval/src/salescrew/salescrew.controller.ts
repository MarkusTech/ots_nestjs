// salescrew.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { SalescrewService } from './salescrew.service';

@Controller('salescrew')
export class SalescrewController {
  constructor(private readonly salescrewService: SalescrewService) {}

  @Get()
  async findBy(){
    return await this.salescrewService.findAll();
  }
}
