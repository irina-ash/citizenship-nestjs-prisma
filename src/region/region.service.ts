import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { RegionReturnDto } from './region.dto';

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
    include?: Prisma.RegionInclude;
  }): Promise<RegionReturnDto[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.region.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }
}
