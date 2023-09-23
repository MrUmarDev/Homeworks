import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BuilderModel } from './models/builder-model';
import { CreateBuilderDto } from './dto/builder-dto';
@Injectable()
export class BuilderService {
  constructor(
    @InjectModel(BuilderModel)
    private readonly builderModel: typeof BuilderModel,
  ) {}
  async createBuilder(
    createBuilderDto: Record<keyof CreateBuilderDto, string | any>,
  ): Promise<CreateBuilderDto> {
    const birth_day = new Date(createBuilderDto.birth_day);
    const builder = { ...createBuilderDto, birth_day: birth_day };
    return await this.builderModel.create(builder);
  }
  async findAll(): Promise<CreateBuilderDto[]> {
    return await this.builderModel.findAll({
      include: {
        all: true,
      },
    });
  }
  async findOne(id: string): Promise<CreateBuilderDto> {
    return await this.builderModel.findOne({
      where: {
        id: id,
      },
    });
  }
  async updateBuilder(
    id: string,
    createCompanyDto: Record<keyof CreateBuilderDto, string | any>,
  ): Promise<CreateBuilderDto> {
    return await this.builderModel
      .update(createCompanyDto, {
        returning: true,
        where: {
          id: id,
        },
      })
      .then((data) => data[1][0]);
  }
  async deleteBuilder(id: string): Promise<any> {
    return await this.builderModel
      .destroy({
        where: {
          id: id,
        },
      })
      .then((data) => {
        return {
          message: 'Company deleted successfully',
        };
      });
  }
}
