import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
  messagesServices:MessagesService

  constructor() {
    // Dont do this on a real app
    this.messagesServices = new MessagesService()
  }
  @Get()
  listMessages() {
    return this.messagesServices.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(body)
    return this.messagesServices.create(body.content)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesServices.findOne(id)
  }
}
