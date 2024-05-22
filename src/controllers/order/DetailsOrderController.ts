import { Request, Response } from "express";
import { SendOrderRequest } from "../../models/order-request";
import { DetailsOrderService } from "../../services/order/DetailsOrderService";

class DetailsOrderController {
    async handle(req: Request, res: Response) {
        const { order_id }: SendOrderRequest = req.body;
        const detailsOrderService: DetailsOrderService = new DetailsOrderService();
        const order = await detailsOrderService.execute({ order_id });
        return res.json(order);
    }
}

export { DetailsOrderController };

