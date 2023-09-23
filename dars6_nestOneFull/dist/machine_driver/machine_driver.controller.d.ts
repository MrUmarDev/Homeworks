import { MachineDriverService } from './machine_driver.service';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { Machine_Driver } from "./models/machine_driver.model";
import { UpdateMachine_driverDto } from "./dto/update-machine_driver.dto";
export declare class Machine_driverController {
    private readonly machineDriverService;
    constructor(machineDriverService: MachineDriverService);
    createMachineDriver(createMachineDriverDto: CreateMachineDriverDto): Promise<Machine_Driver>;
    findAllMachineDrivers(): Promise<Machine_Driver[]>;
    findById(id: string): Promise<Machine_Driver>;
    updateMachineDriver(id: string, updateMachineDriverDto: UpdateMachine_driverDto): Promise<Machine_Driver>;
    deleteMachineDriver(id: string): Promise<number>;
}
