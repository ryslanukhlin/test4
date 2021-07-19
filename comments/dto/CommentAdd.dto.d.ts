import * as mongoose from "mongoose";
import { ProductDocument } from "../../product/schemas/product.schema";
export declare class CommentAddDto {
    text: string;
    userId: mongoose.Schema.Types.ObjectId;
    productId: ProductDocument & string;
}
