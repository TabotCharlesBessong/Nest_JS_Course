import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts:number) {
    console.log(`supplying ${watts} worth of power`)
  }
}
