import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CityService } from './city.service';
import { City as CityModel } from '@prisma/client';
import { ApiQuery } from '@nestjs/swagger';
import { CreateCityDto, UpdateCityDto } from './city.dto';

@Controller('api/cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @ApiQuery({
    name: 'regionId',
    type: String,
    description: 'ID региона. Необязательный параметр',
    required: false,
  })
  @Get()
  async getCities(@Param('regionId') regionId?: string): Promise<CityModel[]> {
    return this.cityService.cities({
      where: { regionId: Number(regionId) },
    });
  }

  @Post()
  async addCity(@Body() cityData: CreateCityDto): Promise<CityModel> {
    return this.cityService.createCity(cityData);
  }

  @Patch(':id')
  async updateCity(
    @Param() params: any,
    @Body() userData: UpdateCityDto,
  ): Promise<CityModel> {
    return this.cityService.updateCity({
      where: { id: params.id },
      data: userData,
    });
  }

  @Delete(':id')
  async deleteCity(@Param() params: any): Promise<CityModel> {
    return this.cityService.removeCity({ id: params.id });
  }
}
