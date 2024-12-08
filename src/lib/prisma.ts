import { PrismaClient } from "@prisma/client";

const prismaClientsingleton = () => {
    return new PrismaClient();
};

declare global {
    // eslint-disable-next-line no-var
    var prismaGlobal: PrismaClient | undefined;
}

const prisma = globalThis.prismaGlobal ?? prismaClientsingleton();

if (process.env.NODE_ENV === "production") {
    globalThis.prismaGlobal = prisma;
}

export default prisma;
