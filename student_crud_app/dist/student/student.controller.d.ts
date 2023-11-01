import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(response: any, createStudentDto: CreateStudentDto): Promise<any>;
    updateStudent(response: any, studentId: string, updateStudentDto: UpdateStudentDto): Promise<any>;
    getStudents(response: any): Promise<any>;
    getStudent(response: any, studentId: string): Promise<any>;
    deleteStudent(response: any, studentId: string): Promise<any>;
}
