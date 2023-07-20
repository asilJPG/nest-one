import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { createBuilderDto } from '../builder/dto/create-builder.dto';
import { Builder } from './models/builder.model';
import { createCompanyDto } from 'src/company/dto/create-company.dto';
import { promises } from 'dns';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post('create')
  async createBuilder(@Body() createBuilderDto: createBuilderDto) {
    return this.builderService.createBuilder(createBuilderDto);
  }

  @Get('all')
  async getAllBuilder(): Promise<Builder[]> {
    return this.builderService.getAllBuilder();
  }
  @Get(':id')
  async getBuilderById(@Param('id') id: string): Promise<Builder> {
    return this.builderService.getBuilderById(+id);
  }
  @Delete(':id')
  async deleteBuilderById(@Param('id') id: string): Promise<number> {
    return this.builderService.deleteBuilderById(+id);
  }
}
