import { Injectable } from '@nestjs/common';
import { CreateTransacDetailDto } from './dto/create-transac_detail.dto';
import { UpdateTransacDetailDto } from './dto/update-transac_detail.dto';

@Injectable()
export class TransacDetailsService {
  create(createTransacDetailDto: CreateTransacDetailDto) {
    return 'This action adds a new transacDetail';
  }

  findAll() {
    return `This action returns all transacDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacDetail`;
  }

  update(id: number, updateTransacDetailDto: UpdateTransacDetailDto) {
    return `This action updates a #${id} transacDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacDetail`;
  }
}
