import prismaClient from "../../prisma";

class ListCategoryService {

    async execute() {

        const categories = await prismaClient.categoria.findMany({
            select: { id: true, nome: true },
        });

        return categories;
    }
    
}

export { ListCategoryService };

