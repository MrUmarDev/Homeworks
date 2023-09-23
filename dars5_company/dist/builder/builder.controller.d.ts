import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/builder-dto';
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    createCompany(data: CreateBuilderDto): Promise<CreateBuilderDto>;
    findAll(): Promise<CreateBuilderDto[]>;
    findOne(id: string): Promise<CreateBuilderDto>;
    updateCompany(id: string, data: CreateBuilderDto): Promise<CreateBuilderDto>;
    deleteCompany(id: string): Promise<any>;
}
