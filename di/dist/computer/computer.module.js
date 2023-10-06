"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerModule = void 0;
const common_1 = require("@nestjs/common");
const computer_controller_1 = require("./computer.controller");
const cpu_module_1 = require("../cpu/cpu.module");
const disk_module_1 = require("../disk/disk.module");
let ComputerModule = exports.ComputerModule = class ComputerModule {
};
exports.ComputerModule = ComputerModule = __decorate([
    (0, common_1.Module)({
        controllers: [computer_controller_1.ComputerController],
        imports: [cpu_module_1.CpuModule, disk_module_1.DiskModule]
    })
], ComputerModule);
//# sourceMappingURL=computer.module.js.map