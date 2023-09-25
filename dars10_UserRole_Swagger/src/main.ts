import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { MyValidationPipe } from "./pipe/validation-pipe";

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    let port = process.env.port || 4000;
    app.useGlobalPipes(new MyValidationPipe());

    app.setGlobalPrefix("api");

    const config = new DocumentBuilder()
      .setTitle("User-Role Project")
      .setDescription("REST API")
      .setVersion("1.0.0")
      .addTag("NestJS, PostgreSQL, Sequelize")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);
    await app.listen(port, () => {
      console.log("Server listening on port:" + port);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
