import { DevConfigService } from "./common/providers/DevConfigService";
export declare class AppService {
    private devConfigService;
    constructor(devConfigService: DevConfigService);
    getHello(): string;
}
