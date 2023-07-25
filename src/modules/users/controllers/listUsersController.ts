import { listUsersUseCase } from './../useCases/listUsersUseCase';
import { Request, Response } from "express";


export class listUsersController{
    async handle(req: Request, res:Response){
        const listusers = new listUsersUseCase();
        const result = await listusers.execute();
        return res.json(result);
    }
}