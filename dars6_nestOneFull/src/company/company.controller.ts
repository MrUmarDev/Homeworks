import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from "./dto/update-company.dto";
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Post('create')
  createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get('all')
  async findAllCompany():Promise<Company[]>{
    return this.companyService.findAllCompany()
  }

  @Get(":id")
  async findById(@Param("id") id:string):Promise<Company>{
    return this.companyService.findByID(+id)
  }

  @Get("name/:name")
  async findByName(@Param("name") name:string):Promise<Company>{
    return this.companyService.findByName(name)
  }

  @Delete(":id")
  async deleteById(@Param('id') id:string):Promise<number>{
    return this.companyService.deleteById(+id)
  }

  @Put(":id")
  async updateByID(@Param('id') id:string, updateCompanyDto: UpdateCompanyDto)
  {return this.companyService.updateByID(+id)
  }


}
