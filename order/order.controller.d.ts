import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    addOrder(createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schema").Order>;
}
