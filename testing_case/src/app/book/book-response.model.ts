import { Book } from './book.schema';

export interface BookResponse {
  books: Book[];
  totalRecords: number;
  totalPages: number;
}
