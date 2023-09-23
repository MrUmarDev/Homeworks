import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company-model';
import { CreateCompanyDto } from './dto/company-dto';
@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company) private readonly CompanyModel: typeof Company,
  ) {}
  async createCompany(
    createCompanyDto: Record<keyof CreateCompanyDto, string | any>,
  ): Promise<CreateCompanyDto> {
    return await this.CompanyModel.create(createCompanyDto);
  }
  async findAll(): Promise<CreateCompanyDto[]> {
    return await this.CompanyModel.findAll();
  }
  async findOne(id: string): Promise<CreateCompanyDto> {
    return await this.CompanyModel.findOne({
      where: {
        id: id,
      },
    });
  }
  async updateCompany(
    id: string,
    createCompanyDto: Record<keyof CreateCompanyDto, string | any>,
  ): Promise<CreateCompanyDto> {
    return await this.CompanyModel.update(createCompanyDto, {
      returning: true,
      where: {
        id: id,
      },
    }).then((data) => data[1][0]);
  }
  async deleteCompany(id: string): Promise<any> {
    return await this.CompanyModel.destroy({
      where: {
        id: id,
      },
    }).then((data) => {
      return {
        message: 'Company deleted successfully',
      };
    });
  }
}
