import { Model } from "sequelize-typescript";
import { User } from "src/users/models/user.model";
interface RoleAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleAttr> {
    id: number;
    value: string;
    description: string;
    users: User[];
}
export {};
