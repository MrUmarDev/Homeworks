import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Req, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { Admin } from './models/admin.model';
import { AdminGuard } from '../../guards/admin.guard';
import { SuperAdminGuard } from '../../guards/super-admin.guard';
import { LoginAdminDto } from './dto/login-admin.dto';
import { CookieGetter } from '../../helpers/cookie.getter';
import { FindAdminDto } from './dto/find-admin.dto';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Register admin' })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(SuperAdminGuard, AdminGuard)
  @Post('signup')
  async registration(
      @Body() createAdminDto: CreateAdminDto,
      @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.registration(createAdminDto, res);
  }

  @ApiOperation({ summary: 'Login admin' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('signin')
  async login(
      @Body() loginAdminDto: LoginAdminDto,
      @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }

  @Get('activate/:link')
  async activate(@Param('link') link: string) {
    return this.adminService.activate(link);
  }

  @ApiOperation({ summary: 'Logout admin' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(AdminGuard)
  @Post('signout')
  async logout(
      @CookieGetter('refresh_token') refreshToken: string,
      @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }

  @UseGuards(AdminGuard)
  @Post(':id/refresh-token')
  async refreshToken(
      @Param('id') admin_id: number,
      @CookieGetter('refresh_token') refreshToken: string,
      @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.refreshToken(admin_id, refreshToken, res);
  }

  @ApiOperation({ summary: 'Find filtered admins' })
  @ApiResponse({ status: 200, type: [Admin] })
  @UseGuards(SuperAdminGuard, AdminGuard)
  @Post('findall')
  async findFilteredAdmins(
      @Body() FindAdminDto: FindAdminDto,
  ) {
    return this.adminService.findFilteredAdmins(FindAdminDto);
  }

  @ApiOperation({ summary: 'Find admin by ID' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(AdminGuard)
  @Get('find/:id')
  async findAdminById(@Param('id') id: number, @Req() req: Request) {
    return this.adminService.findOneById(id, req);
  }

  @ApiOperation({ summary: 'Delete admin by ID' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(SuperAdminGuard, AdminGuard)
  @Delete('delete/:id')
  async deleteAdminById(@Param('id') id: number) {
    return this.adminService.deleteAdminById(id);
  }

  @ApiOperation({ summary: 'Update admin by ID' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(SuperAdminGuard, AdminGuard)
  @Put('update/:id')
  async updateAdminById(
      @Param('id') id: number,
      @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.updateAdminById(updateAdminDto, id);
  }
}
