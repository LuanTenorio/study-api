import { SummaryRepositoryService } from './summary/summary-repository.service';
import { SummaryModule } from './summary/summary.module';
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SummaryModule,
    PrismaModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    SummaryRepositoryService,
    AppService
  ],
})
export class AppModule { }
