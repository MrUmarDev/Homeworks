import { Builder } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateDriverDto): Promise<Builder>;
    findAllBuilders(): Promise<Builder[]>;
    findById(id: number): Promise<Builder>;
}
