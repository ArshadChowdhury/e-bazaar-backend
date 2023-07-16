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
  price: string;

  @Prop({ required: true })
  slug: string;

  @Prop()
  discount_startDate: string;

  @Prop()
  discount_endDate: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
