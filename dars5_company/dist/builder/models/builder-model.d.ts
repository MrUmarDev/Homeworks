import { Model } from 'sequelize-typescript';
import { Company } from 'src/company/models/company-model';
export declare class BuilderModel extends Model {
    id: number;
    full_name: string;
    birth_day: Date;
    salary: number;
    company_id: number;
    company: Company;
    isActive: boolean;
}
