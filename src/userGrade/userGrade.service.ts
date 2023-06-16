import { Injectable } from '@nestjs/common';
import { UserGrade, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserGradeService {
  constructor(private prisma: PrismaService) {}

  // получение всех связей грэйдов и юзеров
  async userGrades(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserGradeWhereUniqueInput;
    where?: Prisma.UserGradeWhereInput;
    orderBy?: Prisma.UserGradeOrderByWithRelationInput;
    include?: Prisma.UserGradeInclude;
  }): Promise<UserGrade[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.userGrade.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }
}
