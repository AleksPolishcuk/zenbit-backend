import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal } from './entities/deal.entity';

@Injectable()
export class DealsService implements OnModuleInit {
  constructor(
    @InjectRepository(Deal)
    private readonly dealRepo: Repository<Deal>,
  ) {}

  async onModuleInit() {
    await this.dealRepo.delete({}); // clear old records
    await this.dealRepo.save([
      {
        title: 'The Marina Torch',
        imageUrl:
          'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'HHHR Tower',
        imageUrl:
          'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'Ocean Peaks',
        imageUrl:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'Al Yaqoub Tower',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f28f958f?w=800',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
    ]);
  }

  findAll(): Promise<Deal[]> {
    return this.dealRepo.find();
  }
}
