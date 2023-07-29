import { Injectable } from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service'
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'I am signin' };
  }

  signup(dto: AuthDto) {
    return { msg: 'I am signup' };
  }
}