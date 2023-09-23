import { Builder } from './models/machine_driver.model';
import { CreateMachine_driverDto } from './dto/create-machine_driver.dto';
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateMachine_driverDto): Promise<Builder>;
    findAllBuilders(): Promise<Builder[]>;
    findById(id: number): Promise<Builder>;
}
