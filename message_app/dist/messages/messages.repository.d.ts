export declare class MessageRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(message: string): Promise<void>;
}
