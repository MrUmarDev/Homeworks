import { Injectable } from '@nestjs/common';
import { Driver } from './models/driver.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from "./dto/update-driver.dto";

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverRepo: typeof Driver) {}

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driver = await this.driverRepo.create(createDriverDto);
    return driver;
  }

  async findAllDrivers(): Promise<Driver[]> {
    const drivers = await this.driverRepo.findAll({
      include: { all: true },
    });
    return drivers;
  }

  async findById(id: number): Promise<Driver> {
    const driver = await this.driverRepo.findByPk(id);
    return driver;
  }

  async deleteById(id:number):Promise<number>{
    const driver = await this.driverRepo.destroy({where:{id}});
    return driver;
  }

  async updateDriver(id:number, updateDriverDto:UpdateDriverDto):Promise<Driver>{
    const driver = await this.driverRepo.update(updateDriverDto,{where:{id}});
    return driver;
  }
}
