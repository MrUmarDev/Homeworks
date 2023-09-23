import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.model';
import { UpdateDriverDto } from "./dto/update-driver.dto";
import { DriverService } from "./driver.service";

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('create')
  async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
    const newDriver = await this.driverService.createDriver(createDriverDto);
    return newDriver;
  }

  @Get('all')
  async findAllDrivers(): Promise<Driver[]> {
    const drivers = await this.driverService.findAllDrivers();
    return drivers;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Driver> {
    const driver = await this.driverService.findById(+id);
    return driver;
  }

  @Put(':id')
  async updateDriver(@Param('id') id: string, @Body() UpdateDriverDto: UpdateDriverDto): Promise<Driver> {
    const updatedDriver = await this.driverService.updateDriver(+id, updateDriverDto);
    return updatedDriver;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    const deletedCount = await this.driverService.deleteById(+id);
    return deletedCount;
  }
}
