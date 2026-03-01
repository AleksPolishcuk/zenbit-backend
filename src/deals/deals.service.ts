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
    await this.dealRepo.delete({});

    await this.dealRepo.save([
      {
        title: 'The Marina Torch',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/marina-torch_t18joh.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'HHHR Tower',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/hhhr-tower_mwadni.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'Ocean Peaks',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/ocean-peaks_p6tkhs.jpg',
        totalPrice: 6500000,
        yieldPercent: 9.25,
        soldPercent: 75,
        ticketPrice: 60000,
        daysLeft: 150,
      },
      {
        title: 'Al Yaqoub Tower',
        imageUrl:
          'https://res.cloudinary.com/dh5i9exjr/image/upload/al-yaqoub-tower_vuzmon.jpg',
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
