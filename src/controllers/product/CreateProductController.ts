import { Request } from "express";
import { Response } from "express-serve-static-core";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

    async handle(req: Request, res: Response) {

        const { nome, preco, descricao, id_categoria } = req.body;

        const createProductService: CreateProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Erro no upload da imagem!");
        }
        const { originalname, filename: banner } = req.file;

        const product = await createProductService.execute({
            nome, preco, descricao, banner, id_categoria
        });

        return res.json({ product });
    }
}

export { CreateProductController };

