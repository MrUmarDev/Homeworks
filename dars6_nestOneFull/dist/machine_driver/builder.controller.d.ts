import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from "./dto/update-builder.dto";
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    findAllBuilders(): Promise<Builder[]>;
    findById(id: string): Promise<Builder>;
    updateBuilder(id: string, UpdateBuilderDto: UpdateBuilderDto): Promise<Builder>;
    deleteBuilder(id: string): Promise<number>;
}
