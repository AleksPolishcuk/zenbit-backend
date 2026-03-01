// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DealsService } from './deals.service';
// import { DealsController } from './deals.controller';
// import { Deal } from './entities/deal.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Deal])],
//   providers: [DealsService],
//   controllers: [DealsController],
// })
// export class DealsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { Deal } from './entities/deal.entity';
import { Application } from '../applications/entities/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal, Application])],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
