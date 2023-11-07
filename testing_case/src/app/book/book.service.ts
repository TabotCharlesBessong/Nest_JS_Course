import { Injectable } from '@nestjs/common';
import { Book } from './book.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BookDto } from './book.model';
import { BookQueryParams } from './book-query-params';
import { BookResponse } from './book-response.model';
@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  // for db seeding
  // async generateAndInsertDummyData(): Promise<void> {
  //   const bookData: { title: string; author: string }[] = books.map((a) => ({
  //     title: a.title,
  //     author: a.author,
  //   }));
  //   await this.bookModel.insertMany(bookData);
  // }

  async getAll(queryParams: BookQueryParams): Promise<BookResponse> {
    const { searchTerm, page, limit, sortBy, sortOrder } = queryParams;
    const query = this.bookModel.find();
    if (searchTerm) {
      query.or([
        { title: { $regex: new RegExp(searchTerm, 'i') } },
        { author: { $regex: new RegExp(searchTerm, 'i') } },
      ]);
    }

    if (sortBy) {
      const sortOptions: Record<string, any> = {};
      sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
      query.sort(sortOptions);
    }

    if (page && limit) {
      const skip = (page - 1) * limit;
      query.skip(skip).limit(limit);
    }

    const books = await query;
    const countQuery = this.bookModel.find();
    // this might be worst case scenario, since i am building query again and
    // also filtering it here, to get totalCount after filter
    if (searchTerm) {
      countQuery.or([
        { title: { $regex: new RegExp(searchTerm, 'i') } },
        { author: { $regex: new RegExp(searchTerm, 'i') } },
      ]);
    }
    const totalRecords = await countQuery.count();
    const totalPages = Math.ceil(totalRecords / limit);
    return { books, totalPages, totalRecords };
  }

  async findById(id: string) {
    return this.bookModel.findById(id);
  }

  async createdBook(book: BookDto): Promise<Book> {
    const createdBook = await this.bookModel.create(book);
    return createdBook;
  }

  async updateBook(book: BookDto) {
    return await this.bookModel.findByIdAndUpdate(book._id, book);
  }

  async deleteBook(id: string) {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
