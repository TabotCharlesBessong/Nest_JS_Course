import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(dto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
}
