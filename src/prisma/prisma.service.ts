import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { env } from 'src/env';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  
  constructor(){
    const log: (Prisma.LogLevel | Prisma.LogDefinition)[] = []

    if(env.QUERY_LOG){
      log.push("query")
    }

    super({log})
  }

  async onModuleInit() {
    await this.$connect();
  }


  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}