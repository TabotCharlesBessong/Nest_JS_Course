import { AuthService } from './auth.service';
import { UserDTO } from '../users/user-dto';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    login(loginDto: Record<string, string>): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): any;
    signup(userDto: UserDTO): Promise<string>;
}
