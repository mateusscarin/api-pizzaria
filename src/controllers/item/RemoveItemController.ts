import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/item/RemoveItemService';

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const id_item: string = req.query.id_item as string;

        const removeItemService: RemoveItemService = new RemoveItemService();
        const item = await removeItemService.execute({ id_item });
        return res.json(item);
    }
}

export { RemoveItemController };

