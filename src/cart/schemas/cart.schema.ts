import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})


export class Cart {

  @Prop()
  imageUrl: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  quantity: string;

  // @Prop({ required: true })
  // discount_startDate: string;

  // @Prop({ required: true })
  // discount_endDate: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);