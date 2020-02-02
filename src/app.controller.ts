import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Flat } from './model/Flat';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('save-random-data/:count')
  async saveRandomData(@Param() {count}): Promise<void> {
    return this.appService.saveRandomData(parseInt(count, 10));
  }

  @Get('schema')
  getSchema(): any[] {
    return this.appService.getSchema();
  }

  @Get('data/:page/:count')
  async getData(@Param() {page, count}): Promise<Flat[]> {
    return await this.appService.getData(page, count);
  }

  @Get('data-stream')
  async getDataStream(@Res() res): Promise<void> {
    return await this.appService.getStreamData(res);
  }

  @Get('data-count')
  async getDataCount(): Promise<number> {
    return await this.appService.getDataCount();
  }
}
