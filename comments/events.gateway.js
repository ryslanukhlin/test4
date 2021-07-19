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
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const comments_service_1 = require("./comments.service");
const CommentAdd_dto_1 = require("./dto/CommentAdd.dto");
const product_service_1 = require("../product/product.service");
let EventsGateway = class EventsGateway {
    constructor(commentService, productService) {
        this.commentService = commentService;
        this.productService = productService;
    }
    async createRoom(socket, productId) {
        socket.join(productId);
    }
    async commentAdd(commentAddDto) {
        const { comment, productId } = await this.commentService.createComment(commentAddDto);
        const Product = await this.productService.getPizzaById(productId);
        this.wss.to(productId).emit('COMMENT:REFRESH', Product);
        return comment;
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], EventsGateway.prototype, "wss", void 0);
__decorate([
    websockets_1.SubscribeMessage('COMMENT:ROOM'),
    __param(0, websockets_1.ConnectedSocket()), __param(1, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "createRoom", null);
__decorate([
    websockets_1.SubscribeMessage('COMMENT:ADD'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CommentAdd_dto_1.CommentAddDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "commentAdd", null);
EventsGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __metadata("design:paramtypes", [comments_service_1.CommentsService,
        product_service_1.ProductService])
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map