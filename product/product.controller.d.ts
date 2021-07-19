/// <reference types="multer" />
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { FileService } from 'src/file/file.service';
import { ProductDocument } from "./schemas/product.schema";
export declare class ProductController {
    private readonly productService;
    private readonly fileService;
    constructor(productService: ProductService, fileService: FileService);
    getPizza(): Promise<import("./schemas/product.schema").Product[]>;
    getPizzaById(id: ProductDocument): Promise<import("./schemas/product.schema").Product>;
    createProduct(image: Express.Multer.File, createProductDto: CreateProductDto): Promise<import("./schemas/product.schema").Product>;
}
