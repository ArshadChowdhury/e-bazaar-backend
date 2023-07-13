import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./schemas/product.schema";
import { CreateProductDto } from "./dto/create-newProduct.dto";

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
    product: CreateProductDto
  ): Promise<Product> {
    return this.productService.create(product);
  }

  @Get(":id")
  async findProduct(
    @Param("id")
    id : string
  ): Promise<Product> {
    return this.productService.findById(id);
  }

}