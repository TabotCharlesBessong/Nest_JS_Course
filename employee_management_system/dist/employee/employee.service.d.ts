/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { CreateEmployeeDto } from "src/dto/create-employee.dto";
import { UpdateEmployeeDto } from "src/dto/update-employee.dto";
import { Employee, EmployeeDocument } from "src/schema/employee.schema";
export declare class EmployeeService {
    private readonly employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeDocument>;
    findAll(): Promise<EmployeeDocument[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & Employee & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeDocument>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & Employee & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
