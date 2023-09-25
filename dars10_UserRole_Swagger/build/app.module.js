"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const role_module_1 = require("./role/role.module");
const role_models_1 = require("./role/models/role.models");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const user_roles_model_1 = require("./role/models/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const { env } = process;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: env.db_host,
                port: Number(env.db_port),
                username: env.db_user,
                password: String(env.db_password),
                database: env.db_dbname,
                models: [role_models_1.Role, user_model_1.User, user_roles_model_1.UserRole],
                autoLoadModels: true,
                logging: false,
            }),
            role_module_1.RoleModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map