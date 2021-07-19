import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { CommentDocument } from 'src/comments/comment.schema';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    getPizza(): Promise<Product[]>;
    getPizzaById(id: ProductDocument): Promise<Product>;
    createProduct(createProductDto: CreateProductDto, image: string): Promise<Product>;
    pushComment(productId: ProductDocument, commentId: CommentDocument): Promise<void>;
}
