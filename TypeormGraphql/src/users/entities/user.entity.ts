import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from "../../posts/entities/post.entity";

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany((type)=> Post, (post) => post.author)
  @Field((type) => [Post])
  posts: Post[];

}
