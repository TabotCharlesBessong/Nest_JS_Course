import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tabotcharles:charles1974@cluster0.vjfxkls.mongodb.net/student_crud',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
