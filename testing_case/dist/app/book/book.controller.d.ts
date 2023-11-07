import { BookDto } from './book.model';
import { BookService } from './book.service';
import { Book } from './book.schema';
import { BookQueryParams } from './book-query-params';
import { BookResponse } from './book-response.model';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAll(query: BookQueryParams): Promise<BookResponse>;
    getById(id: string): Promise<Book>;
    createBook(book: BookDto): Promise<Book>;
    updateBook(id: string, book: BookDto): Promise<Book>;
    deleteBook(id: string): Promise<Book>;
}
