import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false, 
    }),
  );

  const apiPath = 'api';
  // app.setGlobalPrefix(apiPath);

  const options = new DocumentBuilder()
    .setTitle('WS Public Swagger API')
    .setDescription('WS Public Swagger API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // Swagger path: http://localhost:3200/api/docs
  SwaggerModule.setup(`/docs`, app, document);
  app.enableCors();

  await app.listen(Number(process.env.PORT) || 3200);
}
bootstrap();