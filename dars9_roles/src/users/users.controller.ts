import { ActivateUserDto } from './dto/activate-user.dto';
import { RemoveRoleDto } from './dto/remove-role.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.module';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary: 'Create a new user'})
  @ApiResponse({status: 201, description: 'Create a new user', type: [User]})
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, description: 'Get Users', type: [User]})
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({summary: 'add Role to User'})
  @ApiResponse({status: 200, description: 'Add role', type: [User]})
  @HttpCode(200)
  @Post('add_role')
  async addRole(@Body() addRoleDto: AddRoleDto): Promise<User> {
    return this.usersService.addRole(addRoleDto)
  }

  @ApiOperation({summary: 'remove Role from User'})
  @ApiResponse({status: 200, description: 'Remove role', type: [User]})
  @HttpCode(200)
  @Post('remove_role')
  async removeRole(@Body() removeRoleDto: RemoveRoleDto): Promise<User> {
    return this.usersService.removeRole(removeRoleDto)
  }
  
  @ApiOperation({summary: 'Activate User'})
  @ApiResponse({status: 200, description: 'Activate role', type: [User]})
  @HttpCode(200)
  @Post('activate_user')
  async activateUser(@Body() activateUserDto: ActivateUserDto): Promise<User> {
    return this.usersService.activateUser(activateUserDto)
  }

  @ApiOperation({summary: 'Get User'})
  @ApiResponse({status: 200, description: 'Get User', type: [User]})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({summary: 'Update User'})
  @ApiResponse({status: 200, description: 'Update User', type: [User]})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({summary: 'Delete User'})
  @ApiResponse({status: 200, description: 'Delete User', type: [User]})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
