import { Request, Response } from "express";
import { ItemRequest } from "../../models/item-request.models";
import { AddItemService } from "../../services/item/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { id_pedido, id_produto, quantidade }: ItemRequest = req.body;
        const addItemService = new AddItemService();
        const item = await addItemService.excute({ id_pedido, id_produto, quantidade });
        return res.json(item);
    }
}

export { AddItemController };

