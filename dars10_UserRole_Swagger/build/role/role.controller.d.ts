import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/create-role.dto";
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<import("./models/role.models").Role>;
    findAll(): Promise<import("./models/role.models").Role[]>;
    findOne(value: string): Promise<import("./models/role.models").Role>;
}
