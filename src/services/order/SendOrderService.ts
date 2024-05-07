import { SendOrderRequest } from "../../models/order-request";
import prismaClient from "../../prisma";

class SendOrderService {
    async execute({ order_id }: SendOrderRequest) {
        const order = prismaClient.pedido.update({
            where: { id: order_id },
            data: { rascunho: false }
        });
        return order;
    }
}

export { SendOrderService };

