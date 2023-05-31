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
import { User as UserModel } from '@prisma/client';

type UserData = { email: string; name?: string };

@Controller('api')
export class AppController {
  constructor(
    // внедряем зависимости
    private readonly userService: UserService,
  ) {}

  @Post('user')
  async registerUser(@Body() userData: UserData): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
