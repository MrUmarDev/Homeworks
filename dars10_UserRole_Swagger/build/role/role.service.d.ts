import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./models/role.models";
export declare class RoleService {
    private roleRepo;
    constructor(roleRepo: typeof Role);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findByValue(value: string): Promise<Role>;
}
