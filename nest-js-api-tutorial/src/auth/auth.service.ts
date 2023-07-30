import { ConfigModule, ConfigService } from '@nestjs/config';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signin(dto: AuthDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // throw exception if user does not exist
    if (!user) throw new ForbiddenException('Credentials Incorrect');
    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);

    // throw exception if password incorrect
    if (!pwMatches) throw new ForbiddenException('Credentials Incorrect');

    return this.signToken(user.id,user.email)
  }

  async signup(dto: AuthDto) {
    // generate the hashed password
    const hash = await argon.hash(dto.password);
    // save the user to the database
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
        // an alternative way of not returning the user password
        // select:{
        //   id:true,
        //   email:true,
        //   createdAt:true
        // }
      });

      return this.signToken(user.id,user.email)
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('credidentials taken');
        }
      }
      throw error;
    }
  }

  async signToken(userId: string, email: string): Promise<{access_token:string}> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    return {
      access_token:token
    }
  }
}
