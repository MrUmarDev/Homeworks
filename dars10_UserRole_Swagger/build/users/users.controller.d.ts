import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { AddRoleDto } from "./dto/add-role-dto";
import { ActivateUserDto } from "./dto/activate-user-dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./models/user.model").User>;
    findAll(): Promise<import("./models/user.model").User[]>;
    AddRole(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    RemoveRole(addRoleDto: AddRoleDto): Promise<import("./models/user.model").User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<import("./models/user.model").User>;
}
