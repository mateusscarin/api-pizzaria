import { OrderDeleteRequest } from "../../models/order-request";
import prismaClient from "../../prisma";

class RemoveOrderService {
    async execute({ id_pedido }: OrderDeleteRequest) {
        const order = await prismaClient.pedido.delete({ where: { id: id_pedido } });
        return order;
    }
}

export { RemoveOrderService };

