import { Injectable } from '@nestjs/common';
import { Flat } from './model/Flat';
import random from './random';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {

  private MAX_COUNT: number = 200 * 1000;

  private sequelize: Sequelize;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
  }

  getSchema(): any {
    const schema = {
      Region: 'string',
      Gender: 'string',
      Color: 'boolean',
      Units: 'integer',
      Price: 'integer',
      Cost: 'integer',
      Country: 'string',
    };
    return schema;
  }

  async saveRandomData(count: number): Promise<void> {
    for (let i = 1; i < count; i++) {
      const data = random(1000);
      // tslint:disable-next-line:prefer-for-of
      for (let x = 0; x < data.length; x++) {
        const row = data[x];
        const flatTable = new Flat({
          Region: row.Region,
          Gender: row.Gender,
          Color: row.Color,
          Units: row.Units,
          Price: row.Price,
          Cost: row.Cost,
          Country: row.Country,
        });
        await flatTable.save();
      }
    }
  }

  async getData(page: string, count: string): Promise<Flat[]> {
    const countNum = parseInt(count, 10);
    const pageNum = parseInt(page, 10);
    return Flat.findAll({ offset: pageNum * countNum, limit: countNum });
  }

  async getStreamData(response: Response) {
    // @ts-ignore
    const stream = this.sequelize.models.Flat.findAllWithStream({where: {id: {[Op.lte]: this.MAX_COUNT }}});
    stream.pipe(response);
  }

  async getDataCount(): Promise<number> {
    return this.MAX_COUNT;
  }
}
