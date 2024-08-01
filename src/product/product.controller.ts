import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBody, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'src/schemas/product.schema';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiBody({ type: CreateProductDto })
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
    type: Product,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productService.create(createProductDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retrieve all products.',
    type: [Product],
  })
  @ApiOperation({ summary: 'Retrieve all product' })
  @ApiResponse({ status: 404, description: 'Products not found.' })
  async findAll() {
    try {
      return await this.productService.findAll();
    } catch (error) {
      throw new HttpException('Products not found', HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retrieve a product by ID.',
    type: Product,
  })
  @ApiOperation({ summary: 'Retrieve product by ID' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productService.findOne(id);
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return product;
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
    type: Product,
  })
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const updatedProduct = await this.productService.update(
        id,
        updateProductDto,
      );
      if (!updatedProduct) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return updatedProduct;
    } catch (error) {
      throw new HttpException(
        'Failed to update product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted.',
    type: Product,
  })
  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  async remove(@Param('id') id: string) {
    try {
      const deletedProduct = await this.productService.delete(id);
      if (!deletedProduct) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return deletedProduct;
    } catch (error) {
      throw new HttpException(
        'Failed to delete product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
