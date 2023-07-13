import {
  Controller,
  Get,
  Delete,
  Post,
  Put,
  Patch,
  Body,
  Param,
} from "@nestjs/common";
import { Cart } from "./schemas/cart.schema";
import { CartService } from "./cart.service";
import { UpdateCartDto } from "./dto/update-cart.dto";

@Controller("cart")
export class CartController {
  constructor(private cartService: CartService) {}

  @Get("all-cartItems")
  async getAllCartItems(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Post("add-toCart")
  async addToCart(
    @Body()
    cart: Cart
  ): Promise<Cart> {
    return this.cartService.addToCart(cart);
  }

  @Patch("edit/:id")
  async editCartItems(
    @Body("id")
    id: string,
    @Body()
    cart: UpdateCartDto
  ): Promise<Cart> {
    return this.cartService.editById(id, cart);
  }

  @Delete("delete/:id")
  async deleteItemById(@Param("id") id: string): Promise<Cart> {
    return this.cartService.deleteById(id);
  }
}
