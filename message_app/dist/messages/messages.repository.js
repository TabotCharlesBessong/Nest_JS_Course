"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
const readFileAsync = (0, util_1.promisify)(fs_1.readFile);
const writeFileAsync = (0, util_1.promisify)(fs_1.writeFile);
class MessageRepository {
    async findOne(id) {
        const content = await readFileAsync('messages.json', 'utf8');
        const messages = JSON.parse(content);
        return messages[id];
    }
    async findAll() {
        const contents = await readFileAsync('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(message) {
        const content = await readFileAsync('messages.json', 'utf8');
        const messages = JSON.parse(content);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFileAsync('messages.json', JSON.stringify(messages));
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=messages.repository.js.map