import { Request, Response } from "express";
import { ListOpenOrdersService } from "../../services/order/ListOpenOrdersService";

class ListOpenOrdersController {
    async handle(req: Request, res: Response) {
        const start_date = req.query.start_date as string;
        const end_date = req.query.end_date as string;
        const listOpenOrdersService: ListOpenOrdersService = new ListOpenOrdersService();
        const orders = await listOpenOrdersService.execute(start_date, end_date);
        return res.json(orders);
    }
}

export { ListOpenOrdersController };

