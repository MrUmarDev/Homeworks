import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.module';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: "Create a role"})
  @ApiResponse({status: 201, description: "Create a role"})
  // @ApiResponse({status: 201, description: "Create a role", type: [Role]})
  @Post()
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  // @ApiOperation({summary: "Getting all roles"})
  // @ApiResponse({status: 200, description: "Getting all roles", type: [Role]})
  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  // @ApiOperation({summary: "Get a role by value"})
  // @ApiResponse({status: 200, description: "Get a role by value", type: [Role]})
  @Get(':value')
  getRoleByValue(@Param('value') value: string): Promise<Role> {
    return this.rolesService.getRoleByValue(value);
  }

  // @ApiOperation({summary: "Get a role by value"})
  // @ApiResponse({status: 200, description: "Get a role by value", type: [Role]})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Role> {
    return this.rolesService.findOne(+id);
  }

  // @ApiOperation({summary: "Update a role"})
  // @ApiResponse({status: 200, description: "Update a role", type: [Role]})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.rolesService.update(+id, updateRoleDto);
  }

  // @ApiOperation({summary: "Delete a role "})
  // @ApiResponse({status: 200, description: "Delete a role ", type: [Role]})
  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.rolesService.remove(+id);
  }
}
