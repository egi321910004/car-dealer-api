import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductType extends Document {
  @Prop({ required: true })
  product_type_name: string;

  @Prop({ required: true })
  createdby: string;

  @Prop({ required: true })
  createddate: string;
}

export type ProductTypeDocument = ProductType & Document;
export const ProducttypeSchema = SchemaFactory.createForClass(ProductType);
