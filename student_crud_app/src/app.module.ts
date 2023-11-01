import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { studentSchema } from './schema/student.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    ),
    MongooseModule.forFeature([{name:'students',schema:studentSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
