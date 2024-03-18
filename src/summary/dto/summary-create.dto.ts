import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class SummaryCreateDTO {
    
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    summary?: string;

}