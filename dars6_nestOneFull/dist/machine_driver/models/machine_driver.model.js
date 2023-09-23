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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine_Driver = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const machine_model_1 = require("../../machine/models/machine.model");
let Machine_Driver = class Machine_Driver extends sequelize_typescript_1.Model {
};
exports.Machine_Driver = Machine_Driver;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Machine_Driver.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Machine_Driver.prototype, "machineId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Machine_Driver.prototype, "driverId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => machine_model_1.Machine),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Machine_Driver.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => machine_model_1.Machine),
    __metadata("design:type", machine_model_1.Machine)
], Machine_Driver.prototype, "machine", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Driver),
    __metadata("design:type", Array)
], Machine_Driver.prototype, "driver", void 0);
exports.Machine_Driver = Machine_Driver = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'machine_driver',
        createdAt: true,
        underscored: true,
    })
], Machine_Driver);
//# sourceMappingURL=machine_driver.model.js.map