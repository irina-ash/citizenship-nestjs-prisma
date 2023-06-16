import { Injectable } from '@nestjs/common';
import { UserStack, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserStackService {
  constructor(private prisma: PrismaService) {}

  // получение всех связей стэков и юзеров
  async userStacks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserStackWhereUniqueInput;
    where?: Prisma.UserStackWhereInput;
    orderBy?: Prisma.UserStackOrderByWithRelationInput;
  }): Promise<UserStack[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.userStack.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
