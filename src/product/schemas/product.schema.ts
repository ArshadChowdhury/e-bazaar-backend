import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})


export class Product {
  @Prop()
  imageUrl: string;

  @Prop()
  name: string;

  @Prop()
  real_price: number;

  @Prop()
  discounted_price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);