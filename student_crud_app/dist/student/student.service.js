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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StudentService = class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async createStudent(createStudentDto) {
        const newStudent = await new this.studentModel(createStudentDto);
        return newStudent.save();
    }
    async updateStudent(studentId, updateStudentDto) {
        const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, updateStudentDto, { new: true });
        if (!existingStudent) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return existingStudent;
    }
    async getAllStudents() {
        const studentData = await this.studentModel.find();
        if (!studentData || studentData.length == 0) {
            throw new common_1.NotFoundException('Students data not found!');
        }
        return studentData;
    }
    async getStudent(studentId) {
        const existingStudent = await this.studentModel.findById(studentId).exec();
        if (!existingStudent) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return existingStudent;
    }
    async deleteStudent(studentId) {
        const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
        if (!deletedStudent) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return deletedStudent;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
//# sourceMappingURL=student.service.js.map