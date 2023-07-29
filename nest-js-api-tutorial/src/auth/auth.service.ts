import { ForbiddenException, Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service'
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'I am signin' };
  }

  async signup(dto: AuthDto) {
    // generate the hashed password
    const hash = await argon.hash(dto.password);
    // save the user to the database
    try {
      const user = await this.prisma.user.create({
        data:{
          email:dto.email,
          hash
        },
        // an alternative way of not returning the user password
        // select:{
        //   id:true,
        //   email:true,
        //   createdAt:true
        // }
      })
  
      delete user.hash
      return {user};
      
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
          throw new ForbiddenException('credidentials taken')
        }
      }
      throw error
    }
  }
}