import { MessageRepository } from "./messages.repository";
export declare class MessagesService {
    messagesRepo: MessageRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
