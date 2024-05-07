import { Request, Response } from "express";
import { SendOrderRequest } from "../../models/order-request";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id }: SendOrderRequest = req.body;
        const sendOrderService: SendOrderService = new SendOrderService();
        const order = await sendOrderService.execute({ order_id });
        return res.json(order);
    }
}

export { SendOrderController };

