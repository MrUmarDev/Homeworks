import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


const {env} = process;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
    .setTitle('User-role Project')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('NestJS, Postgres, Sequelize')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(env.PORT, () => {
      console.log("listening on port " + env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
