import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { CountryService } from './country/country.service';
import { RegionService } from './region/region.service';
import { CityService } from './city/city.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    UserService,
    CountryService,
    RegionService,
    CityService,
  ],
})
export class AppModule {}
