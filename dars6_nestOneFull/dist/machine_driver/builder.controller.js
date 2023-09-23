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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderController = void 0;
const common_1 = require("@nestjs/common");
const builder_service_1 = require("./builder.service");
const create_builder_dto_1 = require("./dto/create-builder.dto");
const update_builder_dto_1 = require("./dto/update-builder.dto");
let BuilderController = class BuilderController {
    constructor(builderService) {
        this.builderService = builderService;
    }
    async createBuilder(createBuilderDto) {
        const newBuilder = await this.builderService.createBuilder(createBuilderDto);
        return newBuilder;
    }
    async findAllBuilders() {
        const builders = await this.builderService.findAllBuilders();
        return builders;
    }
    async findById(id) {
        const builder = await this.builderService.findById(+id);
        return builder;
    }
    async updateBuilder(id, UpdateBuilderDto) {
        const updatedBuilder = await this.builderService.updateBuilder(+id, updateBuilderDto);
        return updatedBuilder;
    }
    async deleteBuilder(id) {
        const deletedCount = await this.builderService.deleteBuilder(+id);
        return deletedCount;
    }
};
exports.BuilderController = BuilderController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_builder_dto_1.CreateBuilderDto]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "createBuilder", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "findAllBuilders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_builder_dto_1.UpdateBuilderDto]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "updateBuilder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuilderController.prototype, "deleteBuilder", null);
exports.BuilderController = BuilderController = __decorate([
    (0, common_1.Controller)('builder'),
    __metadata("design:paramtypes", [typeof (_a = typeof builder_service_1.BuilderService !== "undefined" && builder_service_1.BuilderService) === "function" ? _a : Object])
], BuilderController);
//# sourceMappingURL=builder.controller.js.map