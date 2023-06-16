import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryReturnDto } from './country.dto';

@Controller('api/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCountries(): Promise<CountryReturnDto[]> {
    return this.countryService
      .countries({
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
