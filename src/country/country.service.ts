import { Injectable } from '@nestjs/common';
import { Country, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
  // внедряем зависимость
  constructor(private prisma: PrismaService) {}

  // получение всех стран
  async countries(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CountryWhereUniqueInput;
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput;
  }): Promise<Country[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.country.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
