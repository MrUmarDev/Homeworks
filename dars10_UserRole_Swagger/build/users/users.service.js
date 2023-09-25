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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const role_service_1 = require("../role/role.service");
let UsersService = class UsersService {
    constructor(UserRepo, roleService) {
        this.UserRepo = UserRepo;
        this.roleService = roleService;
    }
    async create(createUserDto) {
        const newUser = await this.UserRepo.create(createUserDto);
        const role = await this.roleService.findByValue("ADMIN");
        if (!role) {
            throw new common_1.BadRequestException("Role not found");
        }
        await newUser.$set("roles", [role.id]);
        await newUser.save();
        newUser.roles = [role];
        return newUser;
    }
    findAll() {
        return this.UserRepo.findAll({ include: { all: true } });
    }
    async findUserByEmail(email) {
        const user = await this.UserRepo.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async addRole(addRoleDto) {
        const user = await this.UserRepo.findByPk(addRoleDto.userID);
        const role = await this.roleService.findByValue(addRoleDto.value);
        if (role && user) {
            await user.$add("roles", role.id);
            const updated = await this.UserRepo.findByPk(addRoleDto.userID, {
                include: { all: true },
            });
            return updated;
        }
        throw new common_1.HttpException("User or role not found", common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(addRoleDto) {
        const user = await this.UserRepo.findByPk(addRoleDto.userID);
        const role = await this.roleService.findByValue(addRoleDto.value);
        if (role && user) {
            await user.$remove("roles", role.id);
            const updated = await this.UserRepo.findByPk(addRoleDto.userID, {
                include: { all: true },
            });
            return updated;
        }
        throw new common_1.HttpException("User or role not found", common_1.HttpStatus.NOT_FOUND);
    }
    async activateUser(activateUserDto) {
        const user = await this.UserRepo.findByPk(activateUserDto.userID);
        if (!user)
            throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
        user.is_active = true;
        await user.save();
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, role_service_1.RoleService])
], UsersService);
//# sourceMappingURL=users.service.js.map