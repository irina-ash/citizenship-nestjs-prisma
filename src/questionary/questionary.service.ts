import { Injectable } from '@nestjs/common';
import { Questionary, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionaryService {
  constructor(private prisma: PrismaService) {}

  // получение всех анкет
  async questionaries(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.QuestionaryWhereUniqueInput;
    where?: Prisma.QuestionaryWhereInput;
    orderBy?: Prisma.QuestionaryOrderByWithRelationInput;
  }): Promise<Questionary[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.questionary.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // получение анкеты пользователя по email
  async userQuestionary(
    where: Prisma.QuestionaryWhereUniqueInput,
  ): Promise<Questionary | null> {
    return this.prisma.questionary.findUnique({
      where,
    });
  }

  // создание анкеты
  async createQuestionary(
    data: Prisma.QuestionaryCreateInput,
  ): Promise<Questionary> {
    return this.prisma.questionary.create({ data });
  }

  async updateQuestionary(params: {
    where: Prisma.QuestionaryWhereUniqueInput;
    data: Prisma.QuestionaryUpdateInput;
  }): Promise<Questionary> {
    const { where, data } = params;
    return this.prisma.questionary.update({
      data,
      where,
    });
  }

  async removeQuestionary(
    where: Prisma.QuestionaryWhereUniqueInput,
  ): Promise<Questionary> {
    return this.prisma.questionary.delete({ where });
  }
}
