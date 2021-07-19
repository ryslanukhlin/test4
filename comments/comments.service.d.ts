import { Comment, CommentDocument } from "./comment.schema";
import { Model } from "mongoose";
import { CommentAddDto } from "./dto/CommentAdd.dto";
import { ProductService } from "../product/product.service";
import { ProductDocument } from "../product/schemas/product.schema";
export declare class CommentsService {
    private commentModel;
    private productService;
    constructor(commentModel: Model<CommentDocument>, productService: ProductService);
    createComment(commentAddDto: CommentAddDto): Promise<{
        comment: Comment;
        productId: ProductDocument & string;
    }>;
}
