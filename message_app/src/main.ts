import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000);
}
bootstrap();
