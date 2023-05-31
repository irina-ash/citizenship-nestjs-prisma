import { Injectable } from '@nestjs/common';
import { Region, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  // получение всех регионов
  async regions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RegionWhereUniqueInput;
    where?: Prisma.RegionWhereInput;
    orderBy?: Prisma.RegionOrderByWithRelationInput;
  }): Promise<Region[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.region.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
