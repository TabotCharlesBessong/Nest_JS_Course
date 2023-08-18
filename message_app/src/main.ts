import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
