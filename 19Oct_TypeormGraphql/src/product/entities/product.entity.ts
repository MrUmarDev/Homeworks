import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, CreateDateColumn } from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('products')
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field()
  @CreateDateColumn()
  description: string;

  @Field()
  @UpdateDateColumn()
  price: string;

  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;

}
