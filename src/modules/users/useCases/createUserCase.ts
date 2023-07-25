import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class createUserCase {
  async execute({ name, email, password }: ICreateUser) {
    const userExists = await prisma.user.findFirst({
      where: {
        name,
      },
    });
    if (userExists) {
      throw new Error("Name already exists!");
    }
    const emailExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      throw new Error("Email already exists!");
    }

    const user = prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }
}
