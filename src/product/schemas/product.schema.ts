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
  price: number;

  // @Prop()
  // slug: string;

  // @Prop({ required: true })
  // discount_startDate: object;

  // @Prop({ required: true })
  // discount_endDate: object;
}

export const ProductSchema = SchemaFactory.createForClass(Product);