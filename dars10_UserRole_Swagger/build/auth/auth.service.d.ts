import { loginDto } from "./dto/loginDto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    login(LoginDto: loginDto): Promise<{
        token: string;
    }>;
    private validateUser;
    findAll(): string;
    findOne(id: number): string;
}
