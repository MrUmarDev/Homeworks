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
exports.BuilderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const builder_model_1 = require("./models/builder-model");
let BuilderService = class BuilderService {
    constructor(builderModel) {
        this.builderModel = builderModel;
    }
    async createBuilder(createBuilderDto) {
        const birth_day = new Date(createBuilderDto.birth_day);
        const builder = { ...createBuilderDto, birth_day: birth_day };
        return await this.builderModel.create(builder);
    }
    async findAll() {
        return await this.builderModel.findAll({
            include: {
                all: true,
            },
        });
    }
    async findOne(id) {
        return await this.builderModel.findOne({
            where: {
                id: id,
            },
        });
    }
    async updateBuilder(id, createCompanyDto) {
        return await this.builderModel
            .update(createCompanyDto, {
            returning: true,
            where: {
                id: id,
            },
        })
            .then((data) => data[1][0]);
    }
    async deleteBuilder(id) {
        return await this.builderModel
            .destroy({
            where: {
                id: id,
            },
        })
            .then((data) => {
            return {
                message: 'Company deleted successfully',
            };
        });
    }
};
exports.BuilderService = BuilderService;
exports.BuilderService = BuilderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(builder_model_1.BuilderModel)),
    __metadata("design:paramtypes", [Object])
], BuilderService);
//# sourceMappingURL=builder.service.js.map