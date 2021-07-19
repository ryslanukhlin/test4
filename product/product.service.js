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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("./schemas/product.schema");
const comment_schema_1 = require("../comments/comment.schema");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getPizza() {
        return this.productModel.find();
    }
    async getPizzaById(id) {
        return this.productModel.findById(id).populate({ path: "comments", populate: { path: "userId" } });
    }
    async createProduct(createProductDto, image) {
        return this.productModel.create(Object.assign(Object.assign({}, createProductDto), { image }));
    }
    async pushComment(productId, commentId) {
        await this.productModel.findOneAndUpdate({ _id: productId }, { $push: { comments: commentId } });
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map