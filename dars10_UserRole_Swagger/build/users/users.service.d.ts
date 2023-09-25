import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./models/user.model";
import { RoleService } from "src/role/role.service";
import { AddRoleDto } from "./dto/add-role-dto";
import { ActivateUserDto } from "./dto/activate-user-dto";
export declare class UsersService {
    private UserRepo;
    private readonly roleService;
    constructor(UserRepo: typeof User, roleService: RoleService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User>;
    addRole(addRoleDto: AddRoleDto): Promise<User>;
    removeRole(addRoleDto: AddRoleDto): Promise<User>;
    activateUser(activateUserDto: ActivateUserDto): Promise<User>;
}
