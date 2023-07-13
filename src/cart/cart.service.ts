import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cart } from "./schemas/cart.schema";
import mongoose from "mongoose";

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private cartModel: mongoose.Model<Cart>
  ) {}

  async findAll(): Promise<Cart[]> {
    const allCartItems = await this.cartModel.find();
    return allCartItems;
  }

  async addToCart(cart: Cart): Promise<Cart> {
    const newProduct = await this.cartModel.create(cart);
    return newProduct;
  }

  async editById(id: string, cart: Cart): Promise<Cart> {
      return await this.cartModel.findByIdAndUpdate(id, cart, {
        new : true,
        runValidators:true
      });
  }

  async deleteById(id: string): Promise<Cart> {
    return await this.cartModel.findByIdAndDelete(id);
  }
}
