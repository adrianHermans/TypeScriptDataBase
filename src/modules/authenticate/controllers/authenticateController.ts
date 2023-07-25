
import { authenticateUseCase } from './../useCases/authenticateUseCase';
import { Request, Response } from "express";

export class authenticateController{
    async handle (req: Request, res: Response) {
        const { name, password } = req.body;
        const AuthenticateUseCase = new authenticateUseCase();
        const result = await AuthenticateUseCase.execute({
            name,
            password,
            });

        return res.json(result);
    }
}