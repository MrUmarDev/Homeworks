import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto, author: User): Promise<Post> {
    const newPost = this.postRepo.create({ ...createPostDto, author });
    return await this.postRepo.save(newPost);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepo.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Post | undefined> {
    return await this.postRepo.findOne(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post | undefined> {
    const post = await this.postRepo.findOne(id);
    if (!post) {
      return undefined;
    }

    const updatedPost = {
      ...post,
      ...updatePostDto,
    };

    return await this.postRepo.save(updatedPost);
  }

  async remove(id: number): Promise<void> {
    await this.postRepo.delete(id);
  }
}
