import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';
export declare enum Category {
    ADVENTURE = "Adventure",
    CALSSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category: Category;
    user: User;
}
export declare const BookSchema: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book>;
