import { Server, Socket } from 'socket.io';
import { CommentsService } from "./comments.service";
import { CommentAddDto } from "./dto/CommentAdd.dto";
import { ProductService } from "../product/product.service";
export declare class EventsGateway {
    private commentService;
    private productService;
    constructor(commentService: CommentsService, productService: ProductService);
    wss: Server;
    createRoom(socket: Socket, productId: string): Promise<void>;
    commentAdd(commentAddDto: CommentAddDto): Promise<any>;
}
