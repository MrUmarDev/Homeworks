import { Model } from "sequelize-typescript";
import { Machine_Driver } from "../../machine_driver/models/machine_driver.model";
import { Company } from "../../company/models/company.model";
interface IMachine {
    model: string;
    name: string;
    companyId: number;
}
export declare class Machine extends Model<Machine, IMachine> {
    id: number;
    model: string;
    name: string;
    companyId: number;
    companyId: number;
    company: Company;
    machine_driver: Machine_Driver[];
}
export {};
