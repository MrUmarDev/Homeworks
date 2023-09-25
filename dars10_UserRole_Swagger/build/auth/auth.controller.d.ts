import { AuthService } from "./auth.service";
import { loginDto } from "./dto/loginDto";
import { CreateUserDto } from "src/users/dto/create-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(registerDto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(LoginDto: loginDto): Promise<{
        token: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
}
