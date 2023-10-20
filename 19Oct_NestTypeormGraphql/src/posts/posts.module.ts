import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "../users/users.service";
import { UsersResolver } from "../users/users.resolver";
import { PostsResolver } from "./posts.resolver";
import { User } from "../users/entities/user.entity";
import { Post } from "./entities/post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver, UsersService, UsersResolver],
})
export class PostsModule {}
