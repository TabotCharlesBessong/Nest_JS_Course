import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookDto } from './book.model';
import { BookService } from './book.service';
import { Book } from './book.schema';
import { ROLES } from '../utils/role-decorator';
import { Public } from '../utils/public-decorator';
import { BookQueryParams } from './book-query-params';
import { Response } from 'express';
import { BookResponse } from './book-response.model';

@Controller('api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get()
  async getAll(@Query() query: BookQueryParams): Promise<BookResponse> {
    const bookResult = await this.bookService.getAll(query);
    return bookResult;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Book> {
    const book = await this.bookService.findById(id);
    if (!book) throw new NotFoundException();
    return book;
  }

  @ROLES('editor,developer')
  @Post()
  async createBook(@Body() book: BookDto) {
    const createdBook = await this.bookService.createdBook(book);
    return createdBook;
  }

  @ROLES('developer,editor')
  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() book: BookDto,
  ): Promise<Book> {
    const existingBook = await this.bookService.findById(id);
    if (!existingBook) throw new NotFoundException();
    return await this.bookService.updateBook(book);
  }

  @ROLES('developer,editor')
  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    const existingBook = await this.bookService.findById(id);
    if (!existingBook) throw new NotFoundException();
    return await this.bookService.deleteBook(id);
  }
}
