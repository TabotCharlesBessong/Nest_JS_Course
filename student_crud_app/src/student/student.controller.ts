import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { response } from 'express';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent =
        await this.studentService.createStudent(createStudentDto);

      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'Student has been created' });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created',
        error: 'Bad request',
      });
    }
  }

  @Put(':/id')
  async updateStudent(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    try {
      const existingStudent = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );

      return response.status(HttpStatus.OK).json({
        message: 'Student information has been updated successfully',
        existingStudent,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get()
  async getStudents(@Res() response: any) {
    try {
      const studentData = await this.studentService.getAllStudents();

      return response
        .status(HttpStatus.OK)
        .json({ message: 'All students data found successfully', studentData });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':/id')
  async getStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const existingStudent = await this.studentService.getStudent(studentId);

      return response
        .status(HttpStatus.OK)
        .json({ message: 'Student found successfully', existingStudent });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedStudent = await this.studentService.deleteStudent(studentId);

      return response.status(HttpStatus.OK).json({
        message: 'Student deleted',
        deletedStudent,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
