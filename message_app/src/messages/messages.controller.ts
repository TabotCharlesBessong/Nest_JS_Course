import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello messages'
  }

  @Post()
  createMessage() {

  }

  @Get('/:id')
  getMessage() {
    return `I am user charles`
  }
}
