import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: { url: config.get('DATABASE_URL') },
      },
    });
  }

  async cleanDb() {
    return await this.$transaction([
      this.bookmarks.deleteMany(),
      this.users.deleteMany(),
    ]);
  }
}
