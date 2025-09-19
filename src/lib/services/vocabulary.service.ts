import { PrismaClient } from '@prisma/client';
import { Vocabulary } from '@/generated/prisma';

export class VocabularyService {
  private readonly prismaClient: PrismaClient;
  /**
   *
   */
  constructor() {
    this.prismaClient = new PrismaClient();
  }

  async getAll(): Promise<Vocabulary[]> {
    return this.prismaClient.Vocabulary.findMany();
  }
}
