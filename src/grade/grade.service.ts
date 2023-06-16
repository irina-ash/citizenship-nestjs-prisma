import { Injectable } from '@nestjs/common';
import { Grade, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  // получение всех грэйдов
  async grades(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GradeWhereUniqueInput;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput;
  }): Promise<Grade[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.grade.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async grade(where: Prisma.GradeWhereUniqueInput): Promise<Grade | null> {
    return this.prisma.grade.findUnique({
      where,
    });
  }
}
