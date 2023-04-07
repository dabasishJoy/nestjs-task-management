import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create server
  const app = await NestFactory.create(AppModule);
  // listen to server
  await app.listen(3000);
}
bootstrap();
