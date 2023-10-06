import { UsersService } from './users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signup(email: string, password: string): Promise<import("./user.entity").User>;
    signin(email: string, password: string): Promise<import("./user.entity").User>;
}
