import { ConfigService } from '@nestjs/config';

import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const SequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  synchronize: true,
};
