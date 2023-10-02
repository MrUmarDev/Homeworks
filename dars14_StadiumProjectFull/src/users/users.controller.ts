import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Res,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { CookieGetter } from 'src/decorators/cookieGetter.decorator';
import { UserGuard } from 'src/guards/user.guard';
import { FindUserDto } from './dto/find-user.dto';
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('auth/registration')
  registration(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    {
      return this.usersService.registration(createUserDto, res);
    }
  }
  @HttpCode(200)
  @Post('auth/login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    {
      return this.usersService.login(loginDto, res);
    }
  }
  @UseGuards(UserGuard)
  @HttpCode(HttpStatus.OK)
  @Post('auth/logout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.logout(refreshToken, res);
  }
  @Post('user/:id/refresh')
  refreshToken(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.refreshToken(+id, refreshToken, res);
  }
  @Post('users/find')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }

  @Get('users/activate/:link')
  activate(@Param('link') link: string) {
    {
      return this.usersService.activate(link);
    }
  }
  @Get('users')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Get('users/:id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(id);
  }
  @Put('users/:id')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return this.usersService.updateUser(updateUserDto, +id);
  }
  @Delete('users/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
