import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})


export class Product {
  @Prop()
  imageUrl: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  real_price: number;

  @Prop({ required: true })
  discounted_price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);