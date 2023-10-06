import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
export declare class ComputerController {
    private cpuService;
    private diskService;
    constructor(cpuService: CpuService, diskService: DiskService);
    run(): (number | void)[];
}
