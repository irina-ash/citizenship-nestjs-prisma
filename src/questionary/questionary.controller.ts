import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { Questionary as QuestionaryModel } from '@prisma/client';
import { UpdateQuestionaryDto, CreateQuestionaryDto } from './questionary.dto';

@Controller('api/questionaries')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Get()
  async getQuestionaries(): Promise<QuestionaryModel[]> {
    return this.questionaryService.questionaries({});
  }

  @Get(':email')
  async findOneQuestionary(@Param() params: any): Promise<QuestionaryModel> {
    return this.questionaryService.userQuestionary({ email: params.email });
  }

  @Post()
  async addQuestionary(
    @Body() questionaryData: CreateQuestionaryDto,
  ): Promise<QuestionaryModel> {
    return this.questionaryService.createQuestionary(questionaryData);
  }

  @Patch(':id')
  async updateQuestionary(
    @Param() params: any,
    @Body() userData: UpdateQuestionaryDto,
  ): Promise<QuestionaryModel> {
    return this.questionaryService.updateQuestionary({
      where: { id: params.id },
      data: userData,
    });
  }

  @Delete(':id')
  async deleteQuestionary(@Param() params: any): Promise<QuestionaryModel> {
    return this.questionaryService.removeQuestionary({ id: params.id });
  }
}
