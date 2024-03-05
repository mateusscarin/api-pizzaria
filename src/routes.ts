import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/teste', (req: Request, res: Response): Response => {
    return res.json({ nome: 'Scarin' });
});

/*router.get('/teste', (req: Request, res: Response) => {
    throw new Error("Erro ao fazer requisição");
});*/

export { router };

