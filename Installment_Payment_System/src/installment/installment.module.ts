import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Installment } from './models/installment.model';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';

@Module({
  imports: [SequelizeModule.forFeature([Installment])],
  controllers: [InstallmentController],
  providers: [InstallmentService],
  exports: [InstallmentService],
})
export class InstallmentModule {}
