import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./schemas/product.schema";
import * as mongoose from "mongoose";
import { Query as ExpressQuery } from "express-serve-static-core";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productsModel: mongoose.Model<Product>
  ) {}

  async findAll(query: ExpressQuery): Promise<Product[]> {
    const resultPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    const searchParams = query.searchParams
      ? {
          name: {
            $regex: query.searchParams,
            $options: "i",
          },
        }
      : {};
    const allProducts = await this.productsModel
      .find({ ...searchParams })
      .limit(resultPerPage)
      .skip(skip);
    return allProducts;
  }

  async addNewProduct(product: Product): Promise<Product> {
    const newProduct = await this.productsModel.create(product);
    return newProduct;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productsModel.findById(id);

    if (!product) {
      throw new NotFoundException("Book not found");
    }

    return product;
  }

  async deleteById(id: string): Promise<Product> {
    return await this.productsModel.findByIdAndDelete(id);
  }
}
