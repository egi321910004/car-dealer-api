import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProducttypeService } from './producttype.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { ProductType } from 'src/schemas/producttype.schema';

@ApiTags('ProductTypes')
@Controller('producttype')
export class ProducttypeController {
  constructor(private readonly producttypeService: ProducttypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product type' })
  @ApiResponse({
    status: 201,
    description: 'The product type has been successfully created.',
    type: ProductType,
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(
    @Body() createProductTypeDto: CreateProductTypeDto,
  ): Promise<Partial<ProductType>> {
    const createdProductType =
      await this.producttypeService.create(createProductTypeDto);
    return {
      product_type_name: createdProductType.product_type_name,
      createdby: createdProductType.createdby,
      createddate: createdProductType.createddate,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all product types' })
  @ApiResponse({
    status: 200,
    description: 'List of product types',
    type: [ProductType],
  })
  async findAll(): Promise<Partial<ProductType>[]> {
    return this.producttypeService.findAll();
  }
}
