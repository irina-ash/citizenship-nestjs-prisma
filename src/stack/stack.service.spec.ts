import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperStackService } from './stack.service';

describe('DeveloperStackService', () => {
  let service: DeveloperStackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperStackService],
    }).compile();

    service = module.get<DeveloperStackService>(DeveloperStackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
