import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./entities/product.entity";

@Resolver('products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(()=>[Product])
  async getAllProducts(): Promise<Product[]>{
    return this.productsService.findAll();
  }

  @Query(()=>Product)
  async getOneProduct(@Args('id') id:number): Promise<Product>{
    return this.productsService.findOne(id);
  }

  @Mutation(()=>Product)
  async createProduct(
    @Args('createProduct') createProductDto: CreateProductDto,
  ): Promise<Product>{
    return this.productsService.create(createProductDto);
  }

  @Mutation(()=>Product)
  async updateProduct(
    @Args('id') id:number,
    @Args('updateProduct') updateProductDto: UpdateProductDto,
  ): Promise<Product>{
    return this.productsService.update(id, updateProductDto);
  }

  @Mutation(()=>Number)
  async removeProduct(
    @Args('id', {type:()=>ID}) id:number,
  ): Promise<number>{
    return this.productsService.remove(id);
  }
}
