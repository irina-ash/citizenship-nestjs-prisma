import { Controller, Get } from '@nestjs/common';
import { DeveloperStackService } from './stack.service';
import { DeveloperStack as DeveloperStackModel } from '@prisma/client';

@Controller('api/developer-stack')
export class DeveloperStackController {
  constructor(private readonly devStackService: DeveloperStackService) {}

  @Get()
  async getDeveloperStacks(): Promise<DeveloperStackModel[]> {
    return this.devStackService.stacks({});
  }
}
