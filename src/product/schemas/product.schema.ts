import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  discount_startDate: number;

  @Prop({ required: true })
  discount_endDate: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
