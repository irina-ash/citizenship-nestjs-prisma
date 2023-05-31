import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserService } from './user/user.service';
import { CountryService } from './country/country.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, CountryService],
})
export class AppModule {}
