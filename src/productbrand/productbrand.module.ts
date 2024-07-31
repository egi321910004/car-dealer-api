import { Module } from '@nestjs/common';
import { ProductbrandController } from './productbrand.controller';
import { ProductbrandService } from './productbrand.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductBrandSchema } from 'src/schemas/productbrand.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductBrand', schema: ProductBrandSchema },
    ]),
  ],
  controllers: [ProductbrandController],
  providers: [ProductbrandService],
})
export class ProductbrandModule {}
