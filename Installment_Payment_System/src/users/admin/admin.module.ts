import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../../mail/mail.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Admin]),
    JwtModule.register({}),
    MailModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService, JwtModule],
})
export class AdminModule {}
