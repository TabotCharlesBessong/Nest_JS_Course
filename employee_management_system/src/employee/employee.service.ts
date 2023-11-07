import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEmployeeDto } from "src/dto/create-employee.dto";
import { UpdateEmployeeDto } from "src/dto/update-employee.dto";
import { Employee, EmployeeDocument } from "src/schema/employee.schema";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeDocument> {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

  async findAll(): Promise<EmployeeDocument[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string) {
    return this.employeeModel.findById(id);
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeDocument> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.employeeModel.findByIdAndRemove(id);
  }
}