import { Request, Response } from "express";
import { ListClosedOrdersService } from "../../services/order/ListClosedOrdersService";

class ListClosedOrdersController {
    async handle(req: Request, res: Response) {
        const start_date = req.query.start_date as string;
        const end_date = req.query.end_date as string;
        const listClosedOrdersService: ListClosedOrdersService = new ListClosedOrdersService();
        const orders = await listClosedOrdersService.execute(start_date, end_date);
        return res.json(orders);
    }
}

export { ListClosedOrdersController };

