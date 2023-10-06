"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuModule = void 0;
const common_1 = require("@nestjs/common");
const cpu_service_1 = require("./cpu.service");
const power_module_1 = require("../power/power.module");
let CpuModule = exports.CpuModule = class CpuModule {
};
exports.CpuModule = CpuModule = __decorate([
    (0, common_1.Module)({
        providers: [cpu_service_1.CpuService],
        imports: [power_module_1.PowerModule],
        exports: [cpu_service_1.CpuService]
    })
], CpuModule);
//# sourceMappingURL=cpu.module.js.map