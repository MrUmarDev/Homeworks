import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyService {
    private companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAllCompany(): Promise<Company[]>;
    findByID(id: number): Promise<Company>;
    findByName(name: string): Promise<Company>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateCompanyDto: any): Promise<Company>;
}
