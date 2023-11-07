/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Public } from './utils/public-decorator';
@Controller()
export class AppController {
  @Get()
  @Public()
  getIndex() {
    return 'hello';
  }
}
