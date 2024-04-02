import { compare } from "bcryptjs";
import { AuthRequest } from "../../models/auth-request.models";
import prismaClient from "../../prisma";

class AuthUserService {
    async execute({ email, senha }: AuthRequest) {
        const user = await prismaClient.usuario.findFirst({ where: { email: email } });
        if (!user) {
            throw new Error("Usuário ou senha incorretos!");
        }

        if (!await compare(senha, user.senha)) {
            throw new Error("Usuário ou senha incorretos!");
        }

        return { ok: true }
    }
}

export { AuthUserService };

