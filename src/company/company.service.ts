import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyRepo: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.companyRepo.create(createCompanyDto);
    return company;
  }

  async getAllCompany(): Promise<Company[]> {
    const company = await this.companyRepo.findAll({ include: { all: true } });
    return company;
  }

  async getCompanyById(id: number): Promise<Company> {
    try {
      const found_company = await this.companyRepo.findOne({
        where: {
          id,
        },
      });
      return found_company;
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      throw new Error(`${error}`);
    }
  }

  async DeleteCompany(id: number) {
    const deleted = await this.companyRepo.destroy({ where: { id } });
    return deleted;
  }

  async UpdateCompany(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company = await this.companyRepo.update(updateCompanyDto, {
      where: { id },
      returning: true,
    });
    return company[1][0].dataValues;
  }
}
