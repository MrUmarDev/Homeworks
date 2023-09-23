import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: {
        expiresIn: "24h"
      },
      global: true
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtModule],
})
export class AuthModule {}
