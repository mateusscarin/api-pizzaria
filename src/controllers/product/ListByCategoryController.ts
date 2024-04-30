import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const id_categoria = req.query.id_categoria as string;
        const listByCategory: ListByCategoryService = new ListByCategoryService();
        const products = await listByCategory.execute({ id_categoria });
        return res.json(products);
    }
}

export { ListByCategoryController };

