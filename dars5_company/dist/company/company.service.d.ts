import { Company } from './models/company-model';
import { CreateCompanyDto } from './dto/company-dto';
export declare class CompanyService {
    private readonly CompanyModel;
    constructor(CompanyModel: typeof Company);
    createCompany(createCompanyDto: Record<keyof CreateCompanyDto, string | any>): Promise<CreateCompanyDto>;
    findAll(): Promise<CreateCompanyDto[]>;
    findOne(id: string): Promise<CreateCompanyDto>;
    updateCompany(id: string, createCompanyDto: Record<keyof CreateCompanyDto, string | any>): Promise<CreateCompanyDto>;
    deleteCompany(id: string): Promise<any>;
}
