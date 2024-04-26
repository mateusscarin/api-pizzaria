import { ProductRequest } from "../../models/product-request.models";
import prismaClient from "../../prisma";

class CreateProductService {
    async execute({ banner, descricao, id_categoria, nome, preco }: ProductRequest) {
        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                id_categoria: id_categoria
            }
        });
        return product;
    }
}

export { CreateProductService };

