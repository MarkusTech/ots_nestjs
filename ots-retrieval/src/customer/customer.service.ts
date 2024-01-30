import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Item>,
    private readonly dataSource: DataSource
  ){}
  
  // create(createCustomerDto: CreateCustomerDto) {
  //   return 'This action adds a new customer';
  // }

  async findAll() {
    const customers = await this.dataSource.query(
      `SELECT CardCode,CardName,CardFName, LicTradNum,Address FROM OCRD WHERE frozenFor='N' AND CardType='C' ORDER BY CardName`
    );
    return customers;
  }

}
