import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { Column, DataType, HasMany } from 'sequelize-typescript';
import { Builder } from 'src/builder/models/builder.model';

@Module({
  imports: [SequelizeModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @HasMany(() => Builder)
  builders: Builder;
}
