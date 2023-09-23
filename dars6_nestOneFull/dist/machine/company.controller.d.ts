import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAllCompany(): Promise<Company[]>;
    findById(id: string): Promise<Company>;
    findByName(name: string): Promise<Company>;
    deleteById(id: string): Promise<number>;
    updateByID(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
