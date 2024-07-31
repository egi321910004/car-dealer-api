import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductBrand,
  ProductBrandDocument,
} from 'src/schemas/productbrand.schema';
import { CreateProductBrandDto } from './dto/create-brand.dto';

@Injectable()
export class ProductbrandService {
  constructor(
    @InjectModel('ProductBrand')
    private readonly productBrandModel: Model<ProductBrandDocument>,
  ) {}

  async createProductBrand(
    createProductBrandDto: CreateProductBrandDto,
  ): Promise<ProductBrand> {
    const createdProductBrand = new this.productBrandModel(
      createProductBrandDto,
    );
    return createdProductBrand.save();
  }
}
