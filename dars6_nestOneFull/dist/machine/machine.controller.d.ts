import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Machine } from "./models/machine.model";
export declare class MachineController {
    private readonly machineService;
    constructor(machineService: MachineService);
    createCompany(createMachineDto: CreateMachineDto): Promise<Machine>;
    findAllMachines(): Promise<Machine[]>;
    findById(id: string): Promise<Machine>;
    findByName(name: string): Promise<Machine>;
    deleteById(id: string): Promise<number>;
    updateByID(id: string, updateCompanyDto: UpdateMachineDto): Promise<Machine>;
}
