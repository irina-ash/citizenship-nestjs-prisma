import { Controller, Get } from '@nestjs/common';
import { GradeService } from './grade.service';
import { Grade as GradeModel } from '@prisma/client';

@Controller('api/grades')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Get()
  async getGrades(): Promise<GradeModel[]> {
    return this.gradeService.grades({});
  }
}
