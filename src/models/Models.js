import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UsersModels = prisma.users;
