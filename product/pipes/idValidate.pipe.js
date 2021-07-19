"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdValidatePipe = void 0;
const common_1 = require("@nestjs/common");
const Mongoose = require("mongoose");
let IdValidatePipe = class IdValidatePipe {
    transform(value, metadata) {
        if (!Mongoose.Types.ObjectId.isValid(value)) {
            throw new common_1.BadRequestException('id is not type ObjectId');
        }
        return value;
    }
};
IdValidatePipe = __decorate([
    common_1.Injectable()
], IdValidatePipe);
exports.IdValidatePipe = IdValidatePipe;
//# sourceMappingURL=idValidate.pipe.js.map