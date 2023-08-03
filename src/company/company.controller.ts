import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('COMPANIES')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @ApiOperation({ summary: 'Create Company' })
  @Post('create')
  async createCompany(
    @Body() creaateCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return await this.companyService.createCompany(creaateCompanyDto);
  }
  @ApiOperation({ summary: 'Get all Companies' })
  @Get()
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }
  @ApiOperation({ summary: 'Get Company by ID' })
  @Get('/:id')
  getCompanyId(@Param('id') id: string) {
    return this.companyService.getCompanyById(Number(id));
  }
  @ApiOperation({ summary: 'Delete Company' })
  @Delete('delete/:id')
  async deleteCompany(@Param('id') id: string) {
    const result = await this.companyService.DeleteCompany(Number(id));
    return result;
  }
  @ApiOperation({ summary: 'Update Company' })
  @Put('update/:id')
  async updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const updated = await this.companyService.UpdateCompany(
      Number(id),
      updateCompanyDto,
    );
    return updated;
  }
}
