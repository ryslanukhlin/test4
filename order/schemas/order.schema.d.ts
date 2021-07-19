import * as mongoose from 'mongoose';
import { TOrder } from "../types/Order.types";
export declare type OrderDocument = Order & mongoose.Document;
export declare class Order {
    name: string;
    adress: string;
    tell: string;
    price: number;
    optionst: string | null;
    product: TOrder[];
}
export declare const OrderSchema: mongoose.Schema<mongoose.Document<Order, {}>, mongoose.Model<any, any>, undefined>;
