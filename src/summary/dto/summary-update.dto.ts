import { PartialType } from '@nestjs/mapped-types';
import { SummaryCreateDTO } from './summary-create.dto';

export class SummaryUpdateDTO extends PartialType(SummaryCreateDTO) {}