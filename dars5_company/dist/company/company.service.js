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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const company_model_1 = require("./models/company-model");
let CompanyService = class CompanyService {
    constructor(CompanyModel) {
        this.CompanyModel = CompanyModel;
    }
    async createCompany(createCompanyDto) {
        return await this.CompanyModel.create(createCompanyDto);
    }
    async findAll() {
        return await this.CompanyModel.findAll();
    }
    async findOne(id) {
        return await this.CompanyModel.findOne({
            where: {
                id: id,
            },
        });
    }
    async updateCompany(id, createCompanyDto) {
        return await this.CompanyModel.update(createCompanyDto, {
            returning: true,
            where: {
                id: id,
            },
        }).then((data) => data[1][0]);
    }
    async deleteCompany(id) {
        return await this.CompanyModel.destroy({
            where: {
                id: id,
            },
        }).then((data) => {
            return {
                message: 'Company deleted successfully',
            };
        });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(company_model_1.Company)),
    __metadata("design:paramtypes", [Object])
], CompanyService);
//# sourceMappingURL=company.service.js.map