import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly product_name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly product_type?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly product_brand?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly product_year?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly product_status?: string;
}
