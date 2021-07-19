import * as mongoose from 'mongoose';
import { Comment } from "../../comments/comment.schema";
export declare type ProductDocument = Product & mongoose.Document;
export declare class Product {
    name: string;
    description: string;
    price: number;
    image: string | null;
    comments: Comment[];
}
export declare const ProductSchema: mongoose.Schema<mongoose.Document<Product, {}>, mongoose.Model<any, any>, undefined>;
