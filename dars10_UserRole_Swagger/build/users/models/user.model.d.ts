import { Model } from "sequelize-typescript";
import { Role } from "src/role/models/role.models";
interface UserAttr {
    name: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserAttr> {
    id: number;
    name: string;
    email: string;
    password: string;
    is_active: boolean;
    roles: Role[];
}
export {};
