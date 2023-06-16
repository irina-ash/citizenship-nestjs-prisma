import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { ApiQuery } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiQuery({
    name: 'countryId',
    type: String,
    description: 'A country parameter. Optional',
    required: false,
  })
  @ApiQuery({
    name: 'regionId',
    type: String,
    description: 'A region parameter. Optional',
    required: false,
  })
  @Get()
  async getUsers(
    @Param('countryId') countryId?: string,
    @Param('regionId') regionId?: string,
  ): Promise<UserModel[]> {
    return this.userService.users({
      include: {
        city: {
          select: {
            id: true,
            name: true,
            title: true,
            timezone: true,
            value: true,
            country: {
              select: {
                id: true,
                name: true,
                title: true,
                value: true,
              },
            },
            countryId: false,
            regionId: false,
            region: {
              select: {
                id: true,
                title: true,
                value: true,
              },
            },
          },
        },
      },
      where:
        countryId || regionId
          ? {
              OR: [
                {
                  city: countryId
                    ? {
                        countryId: Number(countryId),
                      }
                    : undefined,
                },
                {
                  city: regionId
                    ? {
                        regionId: Number(regionId),
                      }
                    : undefined,
                },
              ],
            }
          : undefined,
    });
  }

  @Get(':email')
  async findOneUser(@Param() params: any): Promise<UserModel> {
    return this.userService.user({
      where: { email: params.email },
      include: {
        city: {
          select: {
            name: true,
            title: true,
            timezone: true,
            regionId: true,
            region: {
              select: {
                title: true,
                value: true,
              },
            },
            countryId: true,
            country: {
              select: {
                name: true,
                title: true,
                value: true,
              },
            },
          },
        },
        grades: {
          select: {
            grade: {
              select: {
                name: true,
              },
            },
            group: {
              select: {
                name: true,
              },
            },
          },
        },
        questionary: true,
        stack: true,
      },
    });
  }

  @Post()
  async registerUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Patch(':id')
  async updateUser(
    @Param() params: any,
    @Body() userData: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: params.id },
      data: userData,
    });
  }

  @Delete(':id')
  async deleteUser(@Param() params: any): Promise<UserModel> {
    return this.userService.removeUser({ id: params.id });
  }
}
