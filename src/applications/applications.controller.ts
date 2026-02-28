import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { JwtAuthGuard } from '../auth/dto/jwt-auth.guard';

interface RequestWithUser extends Request {
  user: { userId: string; email: string };
}

@ApiTags('applications')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @ApiOperation({ summary: 'Submit an application for a deal' })
  create(@Body() dto: CreateApplicationDto, @Request() req: RequestWithUser) {
    return this.applicationsService.create(dto, req.user.userId);
  }

  @Get('my')
  @ApiOperation({ summary: 'Get current user applications' })
  findMine(@Request() req: RequestWithUser) {
    return this.applicationsService.findByUser(req.user.userId);
  }
}
