import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from './dto/update-builder';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('BUILDERS')
@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @ApiOperation({ summary: 'Create Builder' })
  @Post('create')
  async createBuilder(
    @Body() creaateBuilderDto: CreateBuilderDto,
  ): Promise<Builder> {
    return await this.builderService.createBuilder(creaateBuilderDto);
  }
  @ApiOperation({ summary: 'Get all Builders' })
  @Get()
  async getAllBuilders(): Promise<Builder[]> {
    return this.builderService.getAllBuilders();
  }
  @ApiOperation({ summary: 'Get Builder by ID' })
  @Get('/:id')
  getBuilderId(@Param('id') id: string) {
    return this.builderService.getBuilderById(Number(id));
  }
  @ApiOperation({ summary: 'Delete Builder' })
  @Delete('delete/:id')
  async deleteBuilder(@Param('id') id: string) {
    const result = await this.builderService.DeleteBuilder(Number(id));
    return result;
  }
  @ApiOperation({ summary: 'Update Builder' })
  @Put('update/:id')
  async updateBuilder(
    @Param('id') id: string,
    @Body() updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    const updated = await this.builderService.UpdateBuilder(
      Number(id),
      updateBuilderDto,
    );
    return updated;
  }
}
