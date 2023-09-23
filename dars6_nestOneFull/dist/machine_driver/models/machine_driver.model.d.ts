import { Model } from "sequelize-typescript";
import { Machine } from "../../machine/models/machine.model";
import { Builder } from "../../builder/models/builder.model";
interface IMachineDriver {
    machineId: number;
    driverId: number;
}
export declare class Machine_Driver extends Model<Machine_Driver, IMachineDriver> {
    id: number;
    machineId: number;
    driverId: number;
    companyId: number;
    machine: Machine;
    builders: Builder[];
}
export {};
