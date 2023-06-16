import { Controller, Get, Param } from '@nestjs/common';
import { RegionService } from './region.service';
import { ApiQuery } from '@nestjs/swagger';
import { RegionReturnDto } from './region.dto';

@Controller('api/regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiQuery({
    name: 'countryId',
    type: String,
    description: 'ID страны. Необязательный параметр',
    required: false,
  })
  @Get()
  async getRegions(
    @Param('countryId') countryId?: string,
  ): Promise<RegionReturnDto[]> {
    return this.regionService
      .regions({
        where: countryId ? { countryId: Number(countryId) } : undefined,
        include: {
          cities: {
            select: {
              users: true,
            },
          },
        },
      })
      .then((result) =>
        result
          .filter((item) => item.cities?.length > 0)
          .map((item) => ({
            id: item.id,
            name: item.name,
            value: item.value,
            title: item.title,
            users: item.cities.reduce((acc, cur) => [...acc, ...cur.users], []),
          })),
      )
      .catch(() => []);
  }
}
