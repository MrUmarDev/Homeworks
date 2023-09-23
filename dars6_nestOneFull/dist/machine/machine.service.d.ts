import { Machine } from "./models/machine.model";
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from "./dto/update-machine.dto";
export declare class MachineService {
    private machineRepo;
    constructor(machineRepo: typeof Machine);
    createMachine(createMachineDto: CreateMachineDto): Promise<Machine>;
    findAllMachines(): Promise<Machine[]>;
    findByID(id: number): Promise<Machine>;
    findByName(name: string): Promise<Machine>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine>;
}
