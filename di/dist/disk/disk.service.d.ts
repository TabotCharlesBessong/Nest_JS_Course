import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    private powerService;
    constructor(powerService: PowerService);
    getData(): void;
}
