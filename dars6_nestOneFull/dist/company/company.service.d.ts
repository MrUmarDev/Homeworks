import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyService {
    private companyRepo;
    constructor(companyRepo: typeof Company);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAllCompany(): Promise<Company[]>;
    findByID(id: number): Promise<Company>;
    findByName(name: string): Promise<Company>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}
