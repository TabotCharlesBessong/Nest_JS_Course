import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service';

@Controller("todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto)
  }
}
