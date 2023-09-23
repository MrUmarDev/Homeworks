import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { Machine_Driver } from "./models/machine_driver.model";
import { UpdateMachine_driverDto, UpdateMachineDriverDto } from "./dto/update-machine_driver.dto";

@Controller('machine_driver')
export class MachineDriverController {
  constructor(private readonly machineDriverService: MachineDriverService) {}

  @Post('create')
  async createMachineDriver(@Body() createMachineDriverDto: CreateMachineDriverDto): Promise<Machine_Driver> {
    const machineDriver = await this.machineDriverService.createMachineDriver(Machine_Driver);
    return machineDriver;
  }

  @Get('all')
  async findAllMachineDrivers(): Promise<Machine_Driver[]> {
    const machineDrivers = await this.machineDriverService.findAllMachineDrivers();
    return machineDrivers;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Machine_Driver> {
    const machineDriver = await this.machineDriverService.findById(+id);
    return machineDriver;
  }

  @Put(':id')
  async updateMachineDriver(@Param('id') id: string, @Body() updateMachineDriverDto: UpdateMachine_driverDto): Promise<Machine_Driver> {
    const updatedMachineDriver = await this.machineDriverService.updateMachineDriver(+id, updateMachineDriverDto);
    return updatedMachineDriver;
  }

  @Delete(':id')
  async deleteMachineDriver(@Param('id') id: string): Promise<number> {
    const deletedCount = await this.machineDriverService.deleteMachineDriver(+id);
    return deletedCount;
  }
}
