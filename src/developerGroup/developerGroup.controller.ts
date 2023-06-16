import { Controller, Get } from '@nestjs/common';
import { DeveloperGroupService } from './developerGroup.service';
import { DeveloperGroup as DeveloperGroupModel } from '@prisma/client';

@Controller('api/developer-groups')
export class DeveloperGroupController {
  constructor(private readonly developerGroupService: DeveloperGroupService) {}

  @Get()
  async getGroups(): Promise<DeveloperGroupModel[]> {
    return this.developerGroupService.devGroups({});
  }
}
