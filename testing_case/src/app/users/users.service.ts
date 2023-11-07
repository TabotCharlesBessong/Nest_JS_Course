import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './user-dto';
import { Roles } from '../auth/roles.enum';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

  async findOne(username: string) {
    return await this.userModel.findOne({ username }).exec();
  }

  async singup(createUserDTO: UserDTO): Promise<void> {
    const { email, password } = createUserDTO;
    const existingUser = await this.userModel
      .findOne({ $or: [{ email }] })
      .exec();

    if (existingUser) {
      throw new ConflictException('User with this id or email already exists');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username: email,
      email,
      password: passwordHash,
      roles: [Roles.User],
    });
    newUser.save();
  }
}
