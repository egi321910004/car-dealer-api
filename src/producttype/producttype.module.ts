import { Module } from '@nestjs/common';
import { ProducttypeController } from './producttype.controller';
import { ProducttypeService } from './producttype.service';
import { ProducttypeSchema } from 'src/schemas/producttype.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductType', schema: ProducttypeSchema },
    ]),
  ],
  controllers: [ProducttypeController],
  providers: [ProducttypeService],
})
export class ProducttypeModule {}
