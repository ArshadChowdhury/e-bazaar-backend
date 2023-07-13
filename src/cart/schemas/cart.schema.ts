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
  price: number;


  @Prop({ required: true })
  quantity: number;

  // @Prop({ required: true })
  // discount_startDate: object;

  // @Prop({ required: true })
  // discount_endDate: object;
}

export const CartSchema = SchemaFactory.createForClass(Cart);