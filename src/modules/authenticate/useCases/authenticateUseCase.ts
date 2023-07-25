import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IValidateUser {
    name: string;
    password: string;
  }

export class authenticateUseCase{
    async execute({name, password}:IValidateUser){
        const userMatch = await prisma.user.findFirst({
            where:{
              name,
            }
        })
      if(!userMatch){
          // console.log('Acesso Permitido')
          throw new Error("User not found");
      }
      if(password != userMatch.password){
        // console.log('Acesso Não Permitido')
        throw new Error("User or Password Invalid");
      }
      return userMatch;
    }
}