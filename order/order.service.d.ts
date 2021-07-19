import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<OrderDocument>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
