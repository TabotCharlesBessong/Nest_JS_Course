"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessagesService {
    constructor() {
        this.messagesRepo = new messages_repository_1.MessageRepository();
    }
    findOne(id) {
        return this.messagesRepo.findOne(id);
    }
    findAll() {
        return this.messagesRepo.findAll();
    }
    create(content) {
        return this.messagesRepo.create(content);
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.services.js.map