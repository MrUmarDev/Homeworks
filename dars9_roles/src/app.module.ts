import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import {SequelizeModule} from '@nestjs/sequelize'
import { Role } from './roles/models/role.module';
import { UserRoles } from './roles/models/user-roles.module';
import { RolesModule } from './roles/roles.module';
import { User } from './users/models/user.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const {env} = process;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: Number(env.POSTGRES_PORT),
      host: env.POSTGRES_HOST,
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB_NAME,
      models: [Role, User, UserRoles],
      autoLoadModels: true,
      logging: true,
    }),
    RolesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
