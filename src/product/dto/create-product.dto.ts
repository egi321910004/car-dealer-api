import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  readonly product_name: string;

  @ApiProperty()
  readonly product_type: string;

  @ApiProperty()
  readonly product_brand: string;

  @ApiProperty()
  readonly product_year: number;

  @ApiProperty()
  readonly product_status: string;
}
