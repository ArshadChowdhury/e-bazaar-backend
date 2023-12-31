import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ProductsController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductSchema } from "./schemas/product.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
