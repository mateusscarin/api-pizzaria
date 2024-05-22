import { ItemRequest } from "../../models/item-request.models";
import prismaClient from "../../prisma";

class AddItemService {
    async excute({ id_pedido, id_produto, quantidade }: ItemRequest) {
        const item = await prismaClient.item.create({
            data:
            {
                quantidade: quantidade,
                id_pedido: id_pedido,
                id_produto: id_produto
            }
        });
        return item;
    }
}

export { AddItemService };

