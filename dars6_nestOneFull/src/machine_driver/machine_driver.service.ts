import { Injectable } from "@nestjs/common";
import { Machine_Driver } from './models/machine_driver.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { Machine_Driver } from "./models/machine_driver.model";
import { UpdateMachine_driverDto } from "./dto/update-machine_driver.dto";

@Injectable()
export class MachineDriverService {
  constructor(@InjectModel(Machine_Driver) private machineDriverRepo: typeof Machine_Driver) {}

  async createMachineDriver(createMachineDriverDto: CreateMachineDriverDto): Promise<Machine_Driver> {
    const machineDriver = await this.machineDriverRepo.create(createMachineDriverDto);
    return machineDriver;
  }

  async findAllMachineDrivers(): Promise<Machine_Driver[]> {
    const drivers = await this.machineDriverRepo.findAll({
      include: { all: true },
    });
    return drivers;
  }

  async findById(id: number): Promise<Machine_Driver> {
    const machineDriver = await this.machineDriverRepo.findByPk(id);
    return machineDriver;
  }

  async updateMachineDriver(id: string, updateMachineDriverDto: UpdateMachine_driverDto): Promise<Machine_Driver> {
    const updatedMachineDriver = await this.machineDriverRepo.update(updateMachineDriverDto,{
      where:{id},
      returning: true
    });
    console.log("Updated: \n",updatedMachineDriver);
    return updatedMachineDriver;
  }

  async deleteMachineDriver(id: string): Promise<number> {
    const deletedCount = await this.machineDriverRepo.destroy({where:{id}});
    return deletedCount;
  }

}
