import { Module } from '@nestjs/common';
import { MachineDriverController } from "./machine_driver.controller";
import { SequelizeModule } from '@nestjs/sequelize';
import { MachineDriverService } from "./machine_driver.service";
import { Machine } from "../machine/models/machine.model";

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  providers: [MachineDriverService],
  controllers: [MachineDriverController],
})
export class MachineDriverModule {}
