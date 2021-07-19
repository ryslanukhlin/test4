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
var Order_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Order = Order_1 = class Order {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Order.prototype, "adress", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Order.prototype, "tell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Order.prototype, "optionst", void 0);
__decorate([
    mongoose_1.Prop([{ type: { type: mongoose.Types.ObjectId, ref: Order_1.name }, count: Number }]),
    __metadata("design:type", Array)
], Order.prototype, "product", void 0);
Order = Order_1 = __decorate([
    mongoose_1.Schema()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map