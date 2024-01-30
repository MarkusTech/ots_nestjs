import { Injectable } from '@nestjs/common';
import { TransacHeaderDto } from './dto/create-transac_header.dto';
// import { UpdateTransacHeaderDto } from './dto/update-transac_header.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddTransHeader } from './dto/queries/add-transacheader';

@Injectable()
export class TransacHeaderService {
  constructor(
    @InjectRepository(TransacHeaderDto)
    private transacHeaderRepository: Repository<TransacHeaderDto>,
  ) {}

  async create(createTransacHeaderDto: AddTransHeader) {
    return this.transacHeaderRepository.save(createTransacHeaderDto);
  }

  findAll() {
    return this.transacHeaderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transacHeader`;
  }

  // update(id: number, updateTransacHeaderDto: UpdateTransacHeaderDto) {
  //   return `This action updates a #${id} transacHeader`;
  // }

  remove(id: number) {
    return `This action removes a #${id} transacHeader`;
  }
}
