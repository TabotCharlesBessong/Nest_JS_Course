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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = exports.Book = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../auth/schemas/user.schema");
var Category;
(function (Category) {
    Category["ADVENTURE"] = "Adventure";
    Category["CALSSICS"] = "Classics";
    Category["CRIME"] = "Crime";
    Category["FANTASY"] = "Fantasy";
})(Category = exports.Category || (exports.Category = {}));
let Book = class Book {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Book.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Book.prototype, "user", void 0);
Book = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Book);
exports.Book = Book;
exports.BookSchema = mongoose_1.SchemaFactory.createForClass(Book);
//# sourceMappingURL=book.schema.js.map