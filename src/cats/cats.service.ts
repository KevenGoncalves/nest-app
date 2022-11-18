/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    return this.catsRepository.save(createCatDto);
  }

  findAll() {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catsRepository.findOneBy({ id });
    cat!.firstName = updateCatDto.firstName!;
    cat!.lastName = updateCatDto.lastName!;
    cat!.age = updateCatDto.age!;
    return this.catsRepository.save(cat!);
  }

  async remove(id: number) {
    const cat = await this.catsRepository.findOneBy({ id });
    return this.catsRepository.remove(cat!);
  }
}
