import { Module } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { BuilderController } from './builder.controller';
import { Builder } from './models/builder.model';
import { SequelizeModule } from '@nestjs/sequelize'; // Import SequelizeModule as needed

@Module({
  imports: [SequelizeModule.forFeature([Builder])], // Add Builder model to SequelizeModule
  providers: [BuilderService],
  controllers: [BuilderController],
})
export class BuilderModule {}
