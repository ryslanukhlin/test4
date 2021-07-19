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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_create_dto_1 = require("./dto/user-create.dto");
const platform_express_1 = require("@nestjs/platform-express");
const file_service_1 = require("../file/file.service");
const type_file_enum_1 = require("../file/enum/type-file.enum");
const google_user_dto_1 = require("./dto/google-user.dto");
let UsersController = class UsersController {
    constructor(usersService, fileService) {
        this.usersService = usersService;
        this.fileService = fileService;
    }
    async register(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    async downloadIcon(icon, id) {
        const iconName = await this.fileService.createImage(icon, type_file_enum_1.FuleTypeEnum.icon);
        await this.usersService.downloadIcon(id, iconName);
        return await this.usersService.findOneById(id);
    }
    async getOrCreateGoogleUser(createGoogleUserDto) {
        return await this.usersService.createGoogleUser(createGoogleUserDto);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    common_1.Post('icon'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('icon')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "downloadIcon", null);
__decorate([
    common_1.Post('google'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_user_dto_1.CreateGoogleUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getOrCreateGoogleUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService, file_service_1.FileService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map