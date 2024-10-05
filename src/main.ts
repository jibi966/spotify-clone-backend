import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // white list all properties other than from defined types
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
