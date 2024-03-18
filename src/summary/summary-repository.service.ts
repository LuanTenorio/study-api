import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SummaryCreateDTO } from './dto/summary-create.dto';
import { FindOr404Decorator } from 'src/decorators/findOr404.decorator';
import { SummaryUpdateDTO } from './dto/summary-update.dto';

@Injectable()
export class SummaryRepositoryService {

    constructor(
        private readonly prismaService: PrismaService,
    ){}

    async create({ title, summary }: SummaryCreateDTO){
        return this.prismaService.summary.create({
            data: {
                title, 
                summary: summary ?? ''
            }
        })
    }

    @FindOr404Decorator("Summary not Found")
    async findOne(id: number){
        return this.prismaService.summary.findFirst({
            where: { id }
        })
    }

    @FindOr404Decorator("Summary not Found")
    async updateOne(id: number, data: SummaryUpdateDTO){
        return this.prismaService.summary.update({
            where: { id },
            data
        })
    }

    @FindOr404Decorator("Summary not Found")
    async deleteOne(id: number){
        return this.prismaService.summary.delete({
            where: { id }
        })
    }
}
