import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}
  @Post('create')
  createCompany(@Body() createMachineDto: CreateMachineDto): Promise<Machine> {
    return this.machineService(createMachineDto);
  }

  @Get('all')
  async findAllMachines():Promise<Machine[]>{
    return this.machineService.findAllMachines()
  }

  @Get(":id")
  async findById(@Param("id") id:string):Promise<Machine>{
    return this.machineService.findByID(+id)
  }

  @Get("name/:name")
  async findByName(@Param("name") name:string):Promise<Machine>{
    return this.machineService.findByName(name)
  }

  @Delete(":id")
  async deleteById(@Param('id') id:string):Promise<number>{
    return this.machineService.deleteById(+id)
  }

  @Put(":id")
  async updateByID(@Param('id') id:string, updateCompanyDto: UpdateMachineDto)
  {return this.machineService.updateByID(+id)
  }


}
