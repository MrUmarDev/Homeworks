import { Builder } from "../../builder/models/builder.model";
interface ICompany {
    name: string;
    address: string;
    phone_number: string;
}
import { Model } from "sequelize-typescript";
export declare class Company extends Model<Company, ICompany> {
    id: number;
    name: string;
    adress: string;
    phone_number: boolean;
    builders: Builder[];
}
export {};
