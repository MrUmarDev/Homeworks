import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ){}

  create(createProductDto: CreateProductDto):Promise<Product> {
    return this.productRepo.save(createProductDto);
  }

  findAll():Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number) : Promise<Product> {
    return this.productRepo.findOne({where: {id}});
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<Product> {
    await this.productRepo.update({id}, {...updateProductDto});
    return this.findOne(id);
  }

  async remove(id: number):Promise<number> {
    await this.productRepo.delete({id});
    return id;
  }
}
