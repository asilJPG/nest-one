import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';
import { BuilderModule } from './builder/builder.module';
import { MachineDriverModule } from './machine_driver/machine_driver.module';
import { DriverModule } from './driver/driver.module';
import { MachineModule } from './machine/machine.module';
// import { RulesModule } from './rules/rules.module';
// import { RoleModule } from './role/role.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/models/role.model';
import { Driver } from './driver/models/driver.model';
import { Builder } from './builder/models/builder.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/model/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Company],
      autoLoadModels: true,
      logging: true,
    }),
    CompanyModule,
    BuilderModule,
    // DriverModule,
    // MachineDriverModule,
    // MachineModule,
    // RoleModule,
    // UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
