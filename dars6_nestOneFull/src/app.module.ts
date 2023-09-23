import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Company } from './company/models/company.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Builder } from "./builder/models/builder.model";
import { BuilderModule } from "./builder/builder.module";
import { MachineModule } from "./machine/machine.module";
import { MachineDriverModule } from "./machine_driver/machine_driver.module";
import { DriverModule } from "./driver/driver.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Company,Builder],
      autoLoadModels: true,
      logging: true,
    }),
    CompanyModule,
    BuilderModule,
    MachineModule,
    MachineDriverModule,
    DriverModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
