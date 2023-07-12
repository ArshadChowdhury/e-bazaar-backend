import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./schemas/product.schema";
import * as mongoose from "mongoose";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productsModel: mongoose.Model<Product>
  ) {}

  async findAll(): Promise<Product[]> {
    const allProducts = await this.productsModel.find();
    return allProducts;
  }

  async create(product: Product) : Promise<Product> {
    const res = await this.productsModel.create(product);
    return res; 
  }
}
