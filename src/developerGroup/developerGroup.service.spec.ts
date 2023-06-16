import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperGroupService } from './developerGroup.service';

describe('DeveloperGroupService', () => {
  let service: DeveloperGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperGroupService],
    }).compile();

    service = module.get<DeveloperGroupService>(DeveloperGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
