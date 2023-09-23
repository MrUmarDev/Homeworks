import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company-dto';
@Controller('/api')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Post('/company')
  createCompany(@Body() data: CreateCompanyDto) {
    return this.companyService.createCompany(data);
  }
  @Get('/companies')
  findAll() {
    return this.companyService.findAll();
  }
  @Get('/company/:id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }
  @Put('/company/:id')
  updateCompany(@Param('id') id: string, @Body() data: CreateCompanyDto) {
    return this.companyService.updateCompany(id, data);
  }
  @Delete('/company/:id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }
}
