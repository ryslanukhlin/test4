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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schema/user.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(userCreateDto) {
        return this.userModel.create(userCreateDto);
    }
    async findOne(email) {
        return this.userModel.findOne({ email });
    }
    async findOneById(id) {
        return this.userModel.findById(id);
    }
    async createGoogleUser(createGoogleUser) {
        const user = await this.findOne(createGoogleUser.email);
        if (user === null)
            return await this.userModel.create(createGoogleUser);
        else
            return user;
    }
    async downloadIcon(id, icon) {
        return this.userModel.findById(id).updateOne({ icon: "http://localhost:8000/" + icon });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map