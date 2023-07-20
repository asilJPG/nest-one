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
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_controller_1 = require("./company.controller");
const company_service_1 = require("./company.service");
const sequelize_1 = require("@nestjs/sequelize");
const company_model_1 = require("./models/company.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const builder_model_1 = require("../builder/models/builder.model");
let CompanyModule = exports.CompanyModule = class CompanyModule {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], CompanyModule.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => builder_model_1.Builder),
    __metadata("design:type", builder_model_1.Builder)
], CompanyModule.prototype, "builders", void 0);
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([company_model_1.Company])],
        controllers: [company_controller_1.CompanyController],
        providers: [company_service_1.CompanyService],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map