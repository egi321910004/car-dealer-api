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
import { ProductbrandService } from './productbrand.service';
import { CreateProductBrandDto } from './dto/create-brand.dto';
import { ProductBrand } from 'src/schemas/productbrand.schema';

@ApiTags('ProductBrand')
@Controller('productbrand')
export class ProductbrandController {
  constructor(private readonly productBrandService: ProductbrandService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product brand' })
  @ApiResponse({
    status: 201,
    description: 'The product brand has been successfully created.',
    type: ProductBrand,
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(
    @Body() createProductBrandDto: CreateProductBrandDto,
  ): Promise<Partial<ProductBrand>> {
    const createdProductBrand =
      await this.productBrandService.createProductBrand(createProductBrandDto);
    return {
      brand_name: createdProductBrand.brand_name,
      brand_email: createdProductBrand.brand_email,
      brand_address: createdProductBrand.brand_address,
      brand_country: createdProductBrand.brand_country,
      createdby: createdProductBrand.createdby,
      createddate: createdProductBrand.createddate,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all product brand' })
  @ApiResponse({
    status: 200,
    description: 'List of product brand',
    type: [ProductBrand],
  })
  async findAll(): Promise<Partial<ProductBrand>[]> {
    return this.productBrandService.findAll();
  }
}
