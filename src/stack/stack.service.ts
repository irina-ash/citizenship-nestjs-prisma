import { Injectable } from '@nestjs/common';
import { DeveloperStack, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeveloperStackService {
  constructor(private prisma: PrismaService) {}

  // получение всех стэков
  async stacks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeveloperStackWhereUniqueInput;
    where?: Prisma.DeveloperStackWhereInput;
    orderBy?: Prisma.DeveloperStackOrderByWithRelationInput;
  }): Promise<DeveloperStack[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.developerStack.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // создание стэка
  async createStack(
    data: Prisma.DeveloperStackCreateInput,
  ): Promise<DeveloperStack> {
    return this.prisma.developerStack.create({ data });
  }

  // обновление стэка
  async updateStack(params: {
    where: Prisma.DeveloperStackWhereUniqueInput;
    data: Prisma.DeveloperStackUpdateInput;
  }): Promise<DeveloperStack> {
    const { where, data } = params;
    return this.prisma.developerStack.update({
      data,
      where,
    });
  }

  // удаление стэка
  async removeStack(
    where: Prisma.DeveloperStackWhereUniqueInput,
  ): Promise<DeveloperStack> {
    return this.prisma.developerStack.delete({ where });
  }
}
