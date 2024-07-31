import { Module } from '@nestjs/common';
import { ProductbrandController } from './productbrand.controller';
import { ProductbrandService } from './productbrand.service';

@Module({
  controllers: [ProductbrandController],
  providers: [ProductbrandService]
})
export class ProductbrandModule {}
