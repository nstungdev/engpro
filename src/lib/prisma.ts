import { PrismaClient } from '@/generated/prisma';

/**
 * Creates a singleton instance of PrismaClient with environment-specific logging
 * - Development: Logs all queries and messages for debugging
 * - Production: Only logs warnings and errors to reduce noise
 */
const prismaClientSingleton = () => {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['warn', 'error'],
  });
};

// Extend the global namespace to include our Prisma instance
// This allows us to attach the client to globalThis in development
declare global {
  var __prisma: PrismaClient | undefined;
}

// Use existing global instance or create a new one
// This prevents creating multiple connections during development hot reloads
const prisma = globalThis.__prisma ?? prismaClientSingleton();

export default prisma;

// In development, store the client on globalThis to reuse across hot reloads
// This prevents "too many clients" errors during development
if (process.env.NODE_ENV !== 'production') globalThis.__prisma = prisma;
