import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductBrand extends Document {
  @Prop({ required: true })
  brand_name: string;

  @Prop({ required: true })
  brand_email: string;

  @Prop({ required: true })
  brand_address: string;

  @Prop({ required: true })
  brand_country: string;

  @Prop({ required: true })
  createdby: string;

  @Prop({ required: true })
  createddate: string;
}

export type ProductBrandDocument = ProductBrand & Document;
export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand);
