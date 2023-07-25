import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class listUsersUseCase{
    async execute(){
        const users = await prisma.user.findMany();
        return users;
    }
}