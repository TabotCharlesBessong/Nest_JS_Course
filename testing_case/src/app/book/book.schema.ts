import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: String;
  @Prop({ required: true })
  author: String;
}
export const BookSchema = SchemaFactory.createForClass(Book);
