import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Prevent multiple instances of Prisma Client in development
 */
declare const global: typeof globalThis & { prisma?: PrismaClient };
/**
 * Export globalThis instance of Prisma Client in development.
 * Otherwise, export a new instance of Prisma Client.
 */
export const prisma = global.prisma || new PrismaClient();
if (process.env['NODE_ENV'] === 'development') global.prisma = prisma;
// Export all the models.
export * from './models';
// Export the Prisma Client.
export default prisma;
