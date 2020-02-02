import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Sequelize } from 'sequelize-typescript';
import { Flat } from './model/Flat';
import * as sequelizeStream from 'node-sequelize-stream';
const sequelize =  new Sequelize({
  database: 'postgres',
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  define: {
    timestamps: false,
  },
});
sequelize.addModels([Flat]);
sequelizeStream(sequelize, 1500);
sequelize.sync();

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Sequelize,
      useValue: sequelize,
    },
  ],
})
export class AppModule {}
