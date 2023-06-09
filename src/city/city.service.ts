import { Injectable } from '@nestjs/common';
import { City, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  // получение всех городов
  async cities(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CityWhereUniqueInput;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput;
  }): Promise<City[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.city.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCity(data: Prisma.CityCreateInput): Promise<City> {
    return this.prisma.city.create({ data });
  }

  async updateCity(params: {
    where: Prisma.CityWhereUniqueInput;
    data: Prisma.CityUpdateInput;
  }): Promise<City> {
    const { where, data } = params;
    return this.prisma.city.update({
      data,
      where,
    });
  }

  async removeCity(where: Prisma.CityWhereUniqueInput): Promise<City> {
    return this.prisma.city.delete({ where });
  }
}
