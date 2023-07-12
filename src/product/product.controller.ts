import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./schemas/product.schema";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get("all-products")
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post("create-product")
  async createNewProduct(
    @Body()
    product
  ): Promise<Product> {
    return this.productService.create(product);
  }
}
