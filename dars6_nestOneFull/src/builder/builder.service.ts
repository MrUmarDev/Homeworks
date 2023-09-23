import { Injectable } from '@nestjs/common';
import { Builder } from './models/builder.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async findAllBuilders(): Promise<Builder[]> {
    const builders = await this.builderRepo.findAll({
      include: { all: true },
    });
    return builders;
  }

  async findById(id: number): Promise<Builder> {
    const builder = await this.builderRepo.findByPk(id);
    return builder;
  }


}
