import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seller } from './models/seller.model';
import { MailModule } from '../../mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { SellerGuard } from '../../guards/seller.guard';

@Module({
  imports: [
    SequelizeModule.forFeature([Seller]),
    MailModule,
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_KEY,
      signOptions: { expiresIn: process.env.ACCESS_TOKEN_TIME },
    }),
  ],
  providers: [SellerService, SellerGuard],
  controllers: [SellerController],
  exports: [JwtModule],
})
export class SellerModule {}
