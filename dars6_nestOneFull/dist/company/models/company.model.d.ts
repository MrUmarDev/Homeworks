import { Builder } from "../../builder/models/builder.model";
interface ICompany {
    name: string;
    address: string;
    phone: string;
}
import { Model } from "sequelize-typescript";
export declare class Company extends Model<Company, ICompany> {
    id: number;
    name: string;
    address: string;
    phone: boolean;
    builders: Builder[];
}
export {};
