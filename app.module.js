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
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const product_module_1 = require("./product/product.module");
const file_module_1 = require("./file/file.module");
const order_module_1 = require("./order/order.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const comments_module_1 = require("./comments/comments.module");
const path = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.mongodbUri),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname + '/static'),
            }),
            product_module_1.ProductModule,
            file_module_1.FileModule,
            order_module_1.OrderModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            comments_module_1.CommentsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map