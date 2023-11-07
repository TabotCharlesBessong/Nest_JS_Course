import { Model } from 'mongoose';
import { UserDTO } from './user-dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<any>);
    findOne(username: string): Promise<any>;
    singup(createUserDTO: UserDTO): Promise<void>;
}
