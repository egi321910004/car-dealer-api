import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductType,
  ProductTypeDocument,
} from 'src/schemas/producttype.schema';
import { CreateProductTypeDto } from './dto/create-product-type.dto';

@Injectable()
export class ProducttypeService {
  constructor(
    @InjectModel('ProductType')
    private readonly productModel: Model<ProductTypeDocument>,
  ) {}

  async create(
    createProductTypeDto: CreateProductTypeDto,
  ): Promise<ProductType> {
    const createdProductType = new this.productModel(createProductTypeDto);
    return createdProductType.save();
  }

  async findAll(): Promise<ProductType[]> {
    return this.productModel.find().exec();
  }
}
