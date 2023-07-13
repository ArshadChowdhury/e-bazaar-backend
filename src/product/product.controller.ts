import { Body, Controller, Get, Param, Post, Delete, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./schemas/product.schema";
import { CreateProductDto } from "./dto/create-newProduct.dto";
import { Query as ExpressQuery } from "express-serve-static-core";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get("all-products")
  async getAllProducts(@Query() query:ExpressQuery): Promise<Product[]> {
    return this.productService.findAll(query);
  }

  @Post("create-product")
  async createNewProduct(
    @Body()
    product: CreateProductDto
  ): Promise<Product> {
    return this.productService.addNewProduct(product);
  }

  @Get(":id")
  async findProduct(
    @Param("id")
    id : string
  ): Promise<Product> {
    return this.productService.findById(id);
  }

  @Delete("delete/:id")
  async deleteProduct(
    @Param("id")
    id : string
  ): Promise<Product> {
    return this.productService.deleteById(id);
  }

}