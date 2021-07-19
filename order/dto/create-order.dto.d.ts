import * as mongoose from "mongoose";
declare class productParams {
    readonly productId: mongoose.Types.ObjectId;
    readonly count: number;
}
export declare class CreateOrderDto {
    readonly name: string;
    readonly adress: string;
    readonly tell: string;
    readonly price: number;
    readonly optionst?: string;
    readonly product: productParams[];
}
export {};
