import { SendOrderRequest } from "../../models/order-request";
import prismaClient from "../../prisma";

class DetailsOrderService {
    async execute({ order_id }: SendOrderRequest) {
        let totalPayable = 0;
        let items: { quantidade: number; produto: string; valUnit: number }[] = [];
        const order = await prismaClient.pedido.findFirst({
            where: { id: order_id },
            include: { items: true }
        });
        const itemsPromises = order.items.map(async (item) => {
            const product = await prismaClient.produto.findFirst({ where: { id: item.id_produto } });
            totalPayable += Number(product.preco) * item.quantidade;
            items.push({ quantidade: item.quantidade, produto: product.nome, valUnit: Number(product.preco) });
        });

        await Promise.all(itemsPromises);

        return { totalPayable: totalPayable, items: items };
    }
}

export { DetailsOrderService };

