import { cache } from 'react';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL ?? '';
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

export const getDb = cache(createPrismaClient);