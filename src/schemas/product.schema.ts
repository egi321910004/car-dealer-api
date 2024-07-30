import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  product_name: string;

  @Prop({ required: true })
  product_type: string;

  @Prop({ required: true })
  product_brand: string;

  @Prop({ required: true })
  product_year: Number;

  @Prop({ required: true })
  product_status: string;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
