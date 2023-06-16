import { Injectable } from '@nestjs/common';
import { DeveloperGroup, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeveloperGroupService {
  constructor(private prisma: PrismaService) {}

  // получение всех видов групп
  async devGroups(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeveloperGroupWhereUniqueInput;
    where?: Prisma.DeveloperGroupWhereInput;
    orderBy?: Prisma.DeveloperGroupOrderByWithRelationInput;
  }): Promise<DeveloperGroup[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.developerGroup.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async devGroup(
    where: Prisma.DeveloperGroupWhereUniqueInput,
  ): Promise<DeveloperGroup | null> {
    return this.prisma.developerGroup.findUnique({
      where,
    });
  }
}
