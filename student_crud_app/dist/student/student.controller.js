"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const create_student_dto_1 = require("../dto/create-student.dto");
const update_student_dto_1 = require("../dto/update-student.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async createStudent(response, createStudentDto) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response
                .status(common_1.HttpStatus.CREATED)
                .json({ message: 'Student has been created' });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created',
                error: 'Bad request',
            });
        }
    }
    async updateStudent(response, studentId, updateStudentDto) {
        try {
            const existingStudent = await this.studentService.updateStudent(studentId, updateStudentDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Student information has been updated successfully',
                existingStudent,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getStudents(response) {
        try {
            const studentData = await this.studentService.getAllStudents();
            return response
                .status(common_1.HttpStatus.OK)
                .json({ message: 'All students data found successfully', studentData });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getStudent(response, studentId) {
        try {
            const existingStudent = await this.studentService.getStudent(studentId);
            return response
                .status(common_1.HttpStatus.OK)
                .json({ message: 'Student found successfully', existingStudent });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async deleteStudent(response, studentId) {
        try {
            const deletedStudent = await this.studentService.deleteStudent(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Student deleted',
                deletedStudent,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Put)(':/id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)(':/id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map