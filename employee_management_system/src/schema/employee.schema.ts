/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee {
  @Prop()
  FirstName: string;

  @Prop()
  SurName: string;

  @Prop()
  Designation: string;

  @Prop({ required: true, unique: true })
  Email: string;

  @Prop()
  Address: string;

  @Prop()
  Salary: string;

  @Prop()
  Gender: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)