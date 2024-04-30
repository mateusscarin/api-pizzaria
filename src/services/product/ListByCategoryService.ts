import { ProductByCategoryRequest } from "../../models/product-by-category-request.models";
import prismaClient from "../../prisma";

class ListByCategoryService {
    async execute({ id_categoria }: ProductByCategoryRequest) {
        const product = await prismaClient.produto.findMany({
            where: {
                id_categoria: id_categoria
            }
        });
        return product;
    }
}

export { ListByCategoryService };

