import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Enable validation
  app.useGlobalPipes(new ValidationPipe());

  // Set global prefix
  app.setGlobalPrefix('api');

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('The Tasks API description')
    .setVersion('1.0')
    .addTag('tasks')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
  console.log(`http://localhost:${process.env.PORT ?? 3000}/api`);
  console.log(
    `Swagger documentation: http://localhost:${process.env.PORT ?? 3000}/docs`,
  );
}
bootstrap();
