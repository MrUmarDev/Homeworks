import {Field, InputType} from '@nestjs/graphql'

@InputType()
export class CreateProductDto {
  @Field({nullable: true})
  name?: string;

  @Field()
  description?: string;

  @Field()
  price?: string;
}
