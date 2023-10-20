import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Post } from "./entities/post.entity";
import { UsersResolver } from "../users/users.resolver";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Resolver(() => Post) // Specify the target type for the resolver.
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersResolver: UsersResolver,
  ) {}

  @Mutation(() => Post)
  async createPost(
    @Args('createPost') createPostDto: CreatePostDto,
    @Args('authorID') authorID: number,
  ): Promise<Post> {
    const author = await this.usersResolver.getOneUser(authorID); // Remove the period (.) after 'getOneUser'.
    return this.postsService.create(createPostDto, author);
  }

  @Query(() => [Post]) // Change to return an array of Post.
  async findAllPosts(): Promise<Post[]> { // Add return type and specify the return type as an array of Post.
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => ID }) id: number,
    @Args('updatePost') updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    return this.postsService.update(id, updatePostDto);
  }

  @Mutation(() => Number)
  async removePost(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<number> {
    await this.postsService.remove(id); // Remove statement should be asynchronous.
    return id; // Return the ID after removal.
  }

  // Uncomment and define individual post retrieval queries.
  @Query(() => Post)
  async getOnePost(@Args('id', { type: () => ID }) id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @Query(() => [Post])
  async getAllPosts(): Promise<Post[]> {
    return this.postsService.findAll();
  }
}
