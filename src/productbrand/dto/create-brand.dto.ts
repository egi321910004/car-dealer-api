import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Date } from 'mongoose';

export class CreateProductBrandDto {
  @ApiProperty()
  readonly brand_name: string;
  @ApiProperty()
  readonly brand_email: string;
  @ApiProperty()
  readonly brand_address: string;
  @ApiProperty()
  readonly brand_country: string;
  @ApiProperty()
  readonly createdby: string;
  @ApiProperty()
  readonly createddate: string;
}
