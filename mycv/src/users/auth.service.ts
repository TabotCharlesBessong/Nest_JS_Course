import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { promisify } from "util";
import { randomBytes, scrypt } from "crypto";

const bcrypt = promisify(scrypt)

@Injectable()
export class AuthService {
  constructor(private userService: UsersService){}

  async signup(email:string,password:string){
    // see if email is in use
    const users = await this.userService.find(email)
    if(users.length){
      throw new BadRequestException('email in use')
    }
    // hash user password
    const salt = randomBytes(8).toString('hex')
    const hash = (await bcrypt(password,salt,32)) as Buffer
    const result = salt + '.'+ hash.toString('hex')
    // create and save user
    const user = await this.userService.create(email,result)

    // return user
    return user
  }

  async signin(email:string,password:string){
    const [user] = await this.userService.find(email)
    if(!user){
      throw new NotFoundException('User not found')
    }

    const [salt,storedHash] = user.password.split('.')

    const hash = (await bcrypt(password,salt,32)) as Buffer

    if(storedHash === hash.toString('hex')){
      return user
    }else {
      throw new BadRequestException('wrong password')
    }
  }
}