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
    const count = await this.dealRepo.count();
    if (count === 0) {
      await this.dealRepo.save([
        {
          title: 'The Marina Torch',
          imageUrl:
            'https://zenbit-backend-pdc6.onrender.com/images/marina-torch.jpg',
          totalPrice: 6500000,
          yieldPercent: 9.25,
          soldPercent: 75,
          ticketPrice: 60000,
          daysLeft: 150,
        },
        {
          title: 'HHHR Tower',
          imageUrl:
            'https://zenbit-backend-pdc6.onrender.com/images/hhhr-tower.jpg',
          totalPrice: 6500000,
          yieldPercent: 9.25,
          soldPercent: 75,
          ticketPrice: 60000,
          daysLeft: 150,
        },
        {
          title: 'Ocean Peaks',
          imageUrl:
            'https://zenbit-backend-pdc6.onrender.com/images/ocean-peaks.jpg',
          totalPrice: 6500000,
          yieldPercent: 9.25,
          soldPercent: 75,
          ticketPrice: 60000,
          daysLeft: 150,
        },
        {
          title: 'Al Yaqoub Tower',
          imageUrl:
            'https://zenbit-backend-pdc6.onrender.com/images/al-yaqoub-tower.jpg',
          totalPrice: 6500000,
          yieldPercent: 9.25,
          soldPercent: 75,
          ticketPrice: 60000,
          daysLeft: 150,
        },
      ]);
    }
  }

  findAll(): Promise<Deal[]> {
    return this.dealRepo.find();
  }
}
