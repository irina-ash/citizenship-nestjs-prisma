import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { RegionController } from './region/region.controller';
import { CountryController } from './country/country.controller';
import { CityController } from './city/city.controller';
import { GradeController } from './grade/grade.controller';
import { DeveloperGroupController } from './developerGroup/developerGroup.controller';
import { QuestionaryController } from './questionary/questionary.controller';

import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { CountryService } from './country/country.service';
import { RegionService } from './region/region.service';
import { CityService } from './city/city.service';
import { GradeService } from './grade/grade.service';
import { DeveloperGroupService } from './developerGroup/developerGroup.service';
import { QuestionaryService } from './questionary/questionary.service';
import { UserGradeService } from './userGrade/userGrade.service';
import { UserStackService } from './userStack/userStack.service';

@Module({
  imports: [],
  controllers: [
    UserController,
    RegionController,
    CountryController,
    CityController,
    GradeController,
    DeveloperGroupController,
    QuestionaryController,
  ],
  providers: [
    PrismaService,
    UserService,
    CountryService,
    RegionService,
    CityService,
    GradeService,
    DeveloperGroupService,
    QuestionaryService,
    UserGradeService,
    UserStackService,
  ],
})
export class AppModule {}
