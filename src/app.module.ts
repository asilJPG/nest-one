import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';
import { BuilderModule } from './builder/builder.module';
import { MachineModule } from './machine/machine.module';
import { Machine_driverModule } from './machine_driver/machine_driver.module';
import { DriverModule } from './driver/driver.module';
import { Builder } from './builder/models/builder.model';
import { Machine } from './machine/models/machine.model';
import { Driver } from './driver/models/driver.model';
import { Machine_driver } from './machine_driver/models/machine_driver.model';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { UserRoles } from './roles/models/user-roles.model';
import { Role } from './roles/models/role.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesService } from './files/files.service';
import { Post } from './posts/models/post.models';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Company,
        Builder,
        Machine,
        Driver,
        Machine_driver,
        User,
        UserRoles,
        Role,
        Post,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    CompanyModule,
    BuilderModule,
    MachineModule,
    Machine_driverModule,
    DriverModule,
    RolesModule,
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [],
  providers: [FilesService],
})
export class AppModule {}
