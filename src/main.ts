import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 3000;

  //Using AutoValidation
  app.useGlobalPipes(new ValidationPipe());

  //Swagger Docs
  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('A Test API whith users')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //Listening Application
  await app.listen(port, () => {
    console.log(`[Server] Running at https://localhost:${port}`);
  });
}
bootstrap();
