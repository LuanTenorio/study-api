import { Injectable } from '@nestjs/common';
import { SummaryRepositoryService } from './summary-repository.service';
import { SummaryCreateDTO } from './dto/summary-create.dto';
import { SummaryUpdateDTO } from './dto/summary-update.dto';

@Injectable()
export class SummaryService {

    constructor(
        private readonly summaryRepositoryService: SummaryRepositoryService
    ){}

    async create(data: SummaryCreateDTO){
        return this.summaryRepositoryService.create(data)
    }

    async findOne(id: number){
        return this.summaryRepositoryService.findOne(id)
    }

    async updateOne(id: number, data: SummaryUpdateDTO){
        return this.summaryRepositoryService.updateOne(id, data)
    }

    async deleteOne(id: number){
        return this.summaryRepositoryService.deleteOne(id)
    }

}
