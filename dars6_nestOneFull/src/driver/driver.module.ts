import { Module } from '@nestjs/common';
import { Driver } from "./models/driver.model";
import { SequelizeModule } from '@nestjs/sequelize';
import { DriverService } from "./driver.service";
import { DriverController } from "./driver.controller"; // Import SequelizeModule as needed

@Module({
  imports: [SequelizeModule.forFeature([Driver])], // Add Builder model to SequelizeModule
  providers: [DriverService],
  controllers: [DriverController],
})
export class DriverModule {}
