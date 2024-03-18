import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SummaryCreateDTO } from './dto/summary-create.dto';
import { SummaryService } from './summary.service';
import { SummaryUpdateDTO } from './dto/summary-update.dto';

@Controller("summary")
export class SummaryController { 

    constructor(
        private readonly summaryService: SummaryService
    ){}

    @Post()
    create(@Body() data: SummaryCreateDTO){
        return this.summaryService.create(data)
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number){
        return this.summaryService.findOne(id)
    }

    @Patch(":id")
    updateOne(@Param("id", ParseIntPipe) id: number, @Body() data: SummaryUpdateDTO){
        return this.summaryService.updateOne(id, data)
    }

    @HttpCode(204)
    @Delete(":id")
    deleteOne(@Param("id", ParseIntPipe) id: number){
        return this.summaryService.deleteOne(id)
    }
}
