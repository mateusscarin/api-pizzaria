import { OrderRequest } from "../../models/order-request";
import prismaClient from "../../prisma";

class CreateOrderService {
    async excute({ mesa, nome }: OrderRequest) {
        const order = await prismaClient.pedido.create({
            data: {
                mesa: mesa,
                nome: nome
            }
        });
        return order;
    }
}

export { CreateOrderService };

