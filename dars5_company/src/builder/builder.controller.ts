import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/builder-dto';
@Controller("/api")
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}
  @Post('/builder')
  createCompany(@Body() data: CreateBuilderDto) {
    return this.builderService.createBuilder(data);
  }
  @Get('/builders')
  findAll() {
    return this.builderService.findAll();
  }
  @Get('/builder/:id')
  findOne(@Param('id') id: string) {
    return this.builderService.findOne(id);
  }
  @Put('/builder/:id')
  updateCompany(@Param('id') id: string, @Body() data: CreateBuilderDto) {
    return this.builderService.updateBuilder(id, data);
  }
  @Delete('/builder/:id')
  deleteCompany(@Param('id') id: string) {
    return this.builderService.deleteBuilder(id);
  }
}
