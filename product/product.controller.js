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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_product_dto_1 = require("./dto/create-product.dto");
const product_service_1 = require("./product.service");
const file_service_1 = require("../file/file.service");
const type_file_enum_1 = require("../file/enum/type-file.enum");
const idValidate_pipe_1 = require("./pipes/idValidate.pipe");
let ProductController = class ProductController {
    constructor(productService, fileService) {
        this.productService = productService;
        this.fileService = fileService;
    }
    async getPizza() {
        return await this.productService.getPizza();
    }
    async getPizzaById(id) {
        return await this.productService.getPizzaById(id);
    }
    async createProduct(image, createProductDto) {
        const imagePath = await this.fileService.createImage(image, type_file_enum_1.FuleTypeEnum.image);
        return await this.productService.createProduct(createProductDto, imagePath);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getPizza", null);
__decorate([
    common_1.Get(':id'),
    common_1.UsePipes(new idValidate_pipe_1.IdValidatePipe()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getPizzaById", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        file_service_1.FileService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map