import { Field, InputType, Int } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";

@InputType()
export class CreatePostDto {
  @Field({nullable: true})
  title?: string;

  @Field()
  content?: string;

  @Field((type)=>Int, {nullable: true})
  author?: User;
}
