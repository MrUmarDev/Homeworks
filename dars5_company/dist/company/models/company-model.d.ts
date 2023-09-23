import { Model } from 'sequelize-typescript';
import { BuilderModel } from 'src/builder/models/builder-model';
export declare class Company extends Model {
    id: number;
    name: string;
    adress: string;
    phone_number: string;
    isActive: boolean;
    builders: BuilderModel[];
}
