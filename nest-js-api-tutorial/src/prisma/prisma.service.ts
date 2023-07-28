import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(){
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://charles-junior:junior1967@cluster0.pazzesj.mongodb.net/nest_api_tutorial',
        },
      },
    });
  }
}
