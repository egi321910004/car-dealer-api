import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Date } from 'mongoose';

export class CreateProductTypeDto {
  @ApiProperty()
  readonly product_type_name: string;
  @ApiProperty()
  readonly createdby: string;
  @ApiProperty()
  readonly createddate: string;
}
