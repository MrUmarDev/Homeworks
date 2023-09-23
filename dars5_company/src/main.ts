import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
bootstrap();
