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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_model_1 = require("./book.model");
const book_service_1 = require("./book.service");
const role_decorator_1 = require("../utils/role-decorator");
const book_query_params_1 = require("./book-query-params");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async getAll(query) {
        const bookResult = await this.bookService.getAll(query);
        return bookResult;
    }
    async getById(id) {
        const book = await this.bookService.findById(id);
        if (!book)
            throw new common_1.NotFoundException();
        return book;
    }
    async createBook(book) {
        const createdBook = await this.bookService.createdBook(book);
        return createdBook;
    }
    async updateBook(id, book) {
        const existingBook = await this.bookService.findById(id);
        if (!existingBook)
            throw new common_1.NotFoundException();
        return await this.bookService.updateBook(book);
    }
    async deleteBook(id) {
        const existingBook = await this.bookService.findById(id);
        if (!existingBook)
            throw new common_1.NotFoundException();
        return await this.bookService.deleteBook(id);
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_query_params_1.BookQueryParams]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getById", null);
__decorate([
    (0, role_decorator_1.ROLES)('editor,developer'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_model_1.BookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, role_decorator_1.ROLES)('developer,editor'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, book_model_1.BookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, role_decorator_1.ROLES)('developer,editor'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('api/books'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map