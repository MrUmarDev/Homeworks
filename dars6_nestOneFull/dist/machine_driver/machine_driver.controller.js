"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine_driverController = void 0;
const common_1 = require("@nestjs/common");
const machine_driver_service_1 = require("./machine_driver.service");
const create_machine_driver_dto_1 = require("./dto/create-machine_driver.dto");
const machine_driver_model_1 = require("./models/machine_driver.model");
const update_machine_driver_dto_1 = require("./dto/update-machine_driver.dto");
let Machine_driverController = class Machine_driverController {
    constructor(machineDriverService) {
        this.machineDriverService = machineDriverService;
    }
    async createMachineDriver(createMachineDriverDto) {
        const machineDriver = await this.machineDriverService.createMachineDriver(machine_driver_model_1.Machine_Driver);
        return machineDriver;
    }
    async findAllMachineDrivers() {
        const machineDrivers = await this.machineDriverService.findAllMachineDrivers();
        return machineDrivers;
    }
    async findById(id) {
        const machineDriver = await this.machineDriverService.findById(+id);
        return machineDriver;
    }
    async updateMachineDriver(id, updateMachineDriverDto) {
        const updatedMachineDriver = await this.machineDriverService.updateMachineDriver(+id, updateMachineDriverDto);
        return updatedMachineDriver;
    }
    async deleteMachineDriver(id) {
        const deletedCount = await this.machineDriverService.deleteMachineDriver(+id);
        return deletedCount;
    }
};
exports.Machine_driverController = Machine_driverController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_machine_driver_dto_1.CreateMachineDriverDto !== "undefined" && create_machine_driver_dto_1.CreateMachineDriverDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], Machine_driverController.prototype, "createMachineDriver", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Machine_driverController.prototype, "findAllMachineDrivers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Machine_driverController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_machine_driver_dto_1.UpdateMachine_driverDto]),
    __metadata("design:returntype", Promise)
], Machine_driverController.prototype, "updateMachineDriver", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Machine_driverController.prototype, "deleteMachineDriver", null);
exports.Machine_driverController = Machine_driverController = __decorate([
    (0, common_1.Controller)('machine_driver'),
    __metadata("design:paramtypes", [typeof (_a = typeof machine_driver_service_1.MachineDriverService !== "undefined" && machine_driver_service_1.MachineDriverService) === "function" ? _a : Object])
], Machine_driverController);
//# sourceMappingURL=machine_driver.controller.js.map