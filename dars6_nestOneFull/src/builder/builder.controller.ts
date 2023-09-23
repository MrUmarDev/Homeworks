import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from "./dto/update-builder.dto";

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post('create')
  async createBuilder(@Body() createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const newBuilder = await this.builderService.createBuilder(createBuilderDto);
    return newBuilder;
  }

  @Get('all')
  async findAllBuilders(): Promise<Builder[]> {
    const builders = await this.builderService.findAllBuilders();
    return builders;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Builder> {
    const builder = await this.builderService.findById(+id);
    return builder;
  }

  @Put(':id')
  async updateBuilder(@Param('id') id: string, @Body() UpdateBuilderDto: UpdateBuilderDto): Promise<Builder> {
    const updatedBuilder = await this.builderService.updateBuilder(+id, updateBuilderDto);
    return updatedBuilder;
  }

  @Delete(':id')
  async deleteBuilder(@Param('id') id: string): Promise<number> {
    const deletedCount = await this.builderService.deleteBuilder(+id);
    return deletedCount;
  }
}
