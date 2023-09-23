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
exports.Machine = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const machine_driver_model_1 = require("../../machine_driver/models/machine_driver.model");
const company_model_1 = require("../../company/models/company.model");
let Machine = class Machine extends sequelize_typescript_1.Model {
};
exports.Machine = Machine;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Machine.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Machine.prototype, "model", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Machine.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Machine.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_model_1.Company),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Machine.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_model_1.Company),
    __metadata("design:type", company_model_1.Company)
], Machine.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => machine_driver_model_1.Machine_Driver),
    __metadata("design:type", Array)
], Machine.prototype, "machine_driver", void 0);
exports.Machine = Machine = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'machine',
        createdAt: true,
        underscored: true,
    })
], Machine);
//# sourceMappingURL=machine.model.js.map