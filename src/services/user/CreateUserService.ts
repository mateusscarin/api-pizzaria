import { hash } from "bcryptjs";
import { UserRequest } from "../../models/user-request.models";
import prismaClient from "../../prisma";

class CreateUserService {
    async execute({ nome, email, senha }: UserRequest) {
        if (!email) {
            throw new Error("E-mail não informado!");
        }

        const senhaHash = await hash(senha, 8);

        const userAlreadyExists = await prismaClient.usuario.findFirst({ where: { email: email } });
        if (userAlreadyExists) {
            throw new Error("E-mail informado já está cadastrado!");
        }
        const user = await prismaClient.usuario.create({
            data: { email: email, nome: nome, senha: senhaHash },
            select: { id: true, nome: true, email: true, criado_em: true }
        })
        return user;
    }
}

export { CreateUserService };

