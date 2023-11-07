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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_schema_1 = require("./book.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async getAll(queryParams) {
        const { searchTerm, page, limit, sortBy, sortOrder } = queryParams;
        const query = this.bookModel.find();
        if (searchTerm) {
            query.or([
                { title: { $regex: new RegExp(searchTerm, 'i') } },
                { author: { $regex: new RegExp(searchTerm, 'i') } },
            ]);
        }
        if (sortBy) {
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
            query.sort(sortOptions);
        }
        if (page && limit) {
            const skip = (page - 1) * limit;
            query.skip(skip).limit(limit);
        }
        const books = await query;
        const countQuery = this.bookModel.find();
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
    async findById(id) {
        return this.bookModel.findById(id);
    }
    async createdBook(book) {
        const createdBook = await this.bookModel.create(book);
        return createdBook;
    }
    async updateBook(book) {
        return await this.bookModel.findByIdAndUpdate(book._id, book);
    }
    async deleteBook(id) {
        return await this.bookModel.findByIdAndRemove(id);
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookService);
//# sourceMappingURL=book.service.js.map