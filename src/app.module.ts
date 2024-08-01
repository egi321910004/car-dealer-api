import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ProducttypeModule } from './producttype/producttype.module';
import { ProductbrandModule } from './productbrand/productbrand.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dealercar'),
    ProductModule,
    ProducttypeModule,
    ProductbrandModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
