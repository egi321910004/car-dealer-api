import { Test, TestingModule } from '@nestjs/testing';
import { ProductbrandController } from './productbrand.controller';

describe('ProductbrandController', () => {
  let controller: ProductbrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductbrandController],
    }).compile();

    controller = module.get<ProductbrandController>(ProductbrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
