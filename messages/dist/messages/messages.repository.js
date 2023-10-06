"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
let MessagesRepository = exports.MessagesRepository = class MessagesRepository {
    async findOne(id) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(content) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await (0, promises_1.writeFile)('messages.json', JSON.stringify(messages));
    }
};
exports.MessagesRepository = MessagesRepository = __decorate([
    (0, common_1.Injectable)()
], MessagesRepository);
//# sourceMappingURL=messages.repository.js.map