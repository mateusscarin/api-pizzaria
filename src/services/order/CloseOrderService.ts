import { SendOrderRequest } from "../../models/order-request";
import prismaClient from "../../prisma";

class CloseOrderService {
    async execute({ order_id }: SendOrderRequest) {
        const order = prismaClient.pedido.update({
            where: { id: order_id },
            data: { status: true }
        });
        return order;
    }
}

export { CloseOrderService };

