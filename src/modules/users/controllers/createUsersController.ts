import { createUserCase } from "./../useCases/createUserCase";
import { Request, Response } from "express";

export class createUsersController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createusercase = new createUserCase();
    const result = await createusercase.execute({
      name,
      email,
      password,
    });

    return res.json(result);
  }
}
