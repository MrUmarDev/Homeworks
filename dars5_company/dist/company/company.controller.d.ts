import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company-dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(data: CreateCompanyDto): Promise<CreateCompanyDto>;
    findAll(): Promise<CreateCompanyDto[]>;
    findOne(id: string): Promise<CreateCompanyDto>;
    updateCompany(id: string, data: CreateCompanyDto): Promise<CreateCompanyDto>;
    deleteCompany(id: string): Promise<any>;
}
