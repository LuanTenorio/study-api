import { SummaryService } from './summary.service';
import { SummaryController } from './summary.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SummaryRepositoryService } from './summary-repository.service';

@Module({
    imports: [
        PrismaModule
    ],
    controllers: [
        SummaryController,
    ],
    providers: [
        SummaryService,
        SummaryRepositoryService
    ],
})
export class SummaryModule { }
