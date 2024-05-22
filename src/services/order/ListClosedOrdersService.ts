import prismaClient from "../../prisma";

class ListClosedOrdersService {
    async execute(start: string, end: string) {
        const startDate: Date = new Date(start);
        const endDate: Date = new Date(end);
        const orders = (await prismaClient.pedido.findMany(
            {
                where: { rascunho: false, status: true },
                orderBy: { criado_em: 'desc' }
            }
        )).filter((order) => {
            return order.criado_em.getTime() > startDate.getTime() && order.criado_em.getTime() < endDate.getTime();
        });
        return orders;
    }
}

export { ListClosedOrdersService };

