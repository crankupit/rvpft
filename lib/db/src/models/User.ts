import type { Prisma, User } from '@prisma/client';
import { prisma } from '../prisma';

/**
 * Thisfunction creates a new user in the database.
 */
export async function createUser({
  firstName,
  lastName,
  email,
  password,
}: Prisma.UserCreateInput): Promise<User> {
  return await prisma.user.create<Prisma.UserCreateArgs>({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
}

/**
 * This function is to get all users from the database.
 */
export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany<Prisma.UserFindManyArgs>();
}

/**
 * This function is to get a user from the database using the email.
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique<Prisma.UserFindUniqueArgs>({
    where: {
      email: email,
    },
  });
}
