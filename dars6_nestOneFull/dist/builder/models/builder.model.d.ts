import { Model } from "sequelize-typescript";
import { Company } from "../../company/models/company.model";
interface IBuilder {
    full_name: string;
    birth_day: string;
    salary: number;
    companyId: number;
}
export declare class Builder extends Model<Builder, IBuilder> {
    id: number;
    full_name: string;
    birth_day: Date;
    salary: number;
    companyId: number;
    companyId: number;
    company: Company;
}
export {};
