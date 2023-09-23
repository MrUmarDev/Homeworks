import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './models/company-model';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
@Module({
  imports: [SequelizeModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [SequelizeModule],
})
export class CompanyModule {}
