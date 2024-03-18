import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import SwaggerUi from 'swagger-ui-express';
import SwaggerDocs from '../swagger.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use('/api', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));

  await app.listen(3000);
}
bootstrap();
