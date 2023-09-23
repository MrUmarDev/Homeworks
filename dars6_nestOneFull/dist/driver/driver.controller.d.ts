import { BuilderService } from './builder.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Builder } from './models/driver.model';
import { UpdateDriverDto } from "./dto/update-driver.dto";
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    createBuilder(createBuilderDto: CreateDriverDto): Promise<Builder>;
    findAllBuilders(): Promise<Builder[]>;
    findById(id: string): Promise<Builder>;
    updateBuilder(id: string, UpdateBuilderDto: UpdateDriverDto): Promise<Builder>;
    deleteBuilder(id: string): Promise<number>;
}
