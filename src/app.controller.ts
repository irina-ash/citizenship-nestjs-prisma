import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { CountryService } from './country/country.service';
import { RegionService } from './region/region.service';
import { CityService } from './city/city.service';
import { User as UserModel } from '@prisma/client';
import { Country as CountryModel } from '@prisma/client';
import { Region as RegionModel } from '@prisma/client';
import { City as CityModel } from '@prisma/client';

type UserData = { email: string; name?: string };

@Controller('api')
export class AppController {
  constructor(
    // внедряем зависимости
    private readonly userService: UserService,
    private readonly countryService: CountryService,
    private readonly regionService: RegionService,
    private readonly cityService: CityService,
  ) {}

  @Post('user')
  async registerUser(@Body() userData: UserData): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('countries')
  async getCountries(): Promise<CountryModel[]> {
    return this.countryService.countries({});
  }

  @Get('regions')
  async getRegions(): Promise<RegionModel[]> {
    return this.regionService.regions({});
  }

  @Get('cities')
  async getCities(): Promise<CityModel[]> {
    return this.cityService.cities({});
  }
}
