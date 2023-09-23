import { BuilderModel } from './models/builder-model';
import { CreateBuilderDto } from './dto/builder-dto';
export declare class BuilderService {
    private readonly builderModel;
    constructor(builderModel: typeof BuilderModel);
    createBuilder(createBuilderDto: Record<keyof CreateBuilderDto, string | any>): Promise<CreateBuilderDto>;
    findAll(): Promise<CreateBuilderDto[]>;
    findOne(id: string): Promise<CreateBuilderDto>;
    updateBuilder(id: string, createCompanyDto: Record<keyof CreateBuilderDto, string | any>): Promise<CreateBuilderDto>;
    deleteBuilder(id: string): Promise<any>;
}
