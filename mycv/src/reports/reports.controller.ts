import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReportDto } from './dtos/report.dto';
import { ApprovedReportDto } from './dtos/approved-report.dto';

@Controller('reports')
export class ReportsController {

  constructor(private reportService:ReportsService)
{}
  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User){
    return this.reportService.create(body,user)
  }

  @Patch('/:id')
  approvedReport(@Param('id') id : string, @Body() body: ApprovedReportDto){
    return this.reportService.changeApproval(id,body.approved)
  }
}
