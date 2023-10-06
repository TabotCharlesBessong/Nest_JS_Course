import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    whoAmI(user: User): User;
    signOut(session: any): void;
    createUser(body: CreateUserDto, session: any): Promise<User>;
    signin(body: CreateUserDto, session: any): Promise<User>;
    findUser(id: string): Promise<User>;
    findAllUsers(email: string): Promise<User[]>;
    removeUser(id: string): Promise<User>;
    updateUser(id: string, body: UpdateUserDto): Promise<User>;
}
