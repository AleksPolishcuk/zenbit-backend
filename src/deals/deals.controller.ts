import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';
import { DealsService } from './deals.service';
import { JwtAuthGuard } from '../auth/dto/jwt-auth.guard';

@ApiTags('deals')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all open deals' })
  @ApiResponse({ status: 200, description: 'List of all deals' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll() {
    return this.dealsService.findAll();
  }
}
