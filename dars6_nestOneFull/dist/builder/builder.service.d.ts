import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder.dto';
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    findAllBuilders(): Promise<Builder[]>;
    findById(id: number): Promise<Builder>;
}
