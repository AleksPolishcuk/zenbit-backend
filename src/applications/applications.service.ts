import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly appRepo: Repository<Application>,
  ) {}

  create(dto: CreateApplicationDto, userId: string): Promise<Application> {
    const application = this.appRepo.create({ ...dto, userId });
    return this.appRepo.save(application);
  }

  findAll(): Promise<Application[]> {
    return this.appRepo.find({ relations: ['user', 'deal'] });
  }

  findByUser(userId: string): Promise<Application[]> {
    return this.appRepo.find({ where: { userId } });
  }
}
