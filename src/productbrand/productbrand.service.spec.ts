import { Test, TestingModule } from '@nestjs/testing';
import { ProductbrandService } from './productbrand.service';

describe('ProductbrandService', () => {
  let service: ProductbrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductbrandService],
    }).compile();

    service = module.get<ProductbrandService>(ProductbrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
