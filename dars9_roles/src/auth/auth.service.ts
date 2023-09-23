import { LoginDto } from './dto/login-auth.dto';
import { User } from './../users/models/user.module';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { Injectable, HttpStatus, HttpException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor (
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    ) {}

  async registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Could not find user',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 12);
    const user = await this.usersService.create({
      ...userDto, 
      password: hashedPassword
    })
    return this.generateToken(user)
  }

  async login(loginDto: LoginDto) {
    const user = await this.validatorUser(loginDto);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return this.generateToken(user)
  } 

  private async validatorUser(loginDto: LoginDto) {
    const user = await this.usersService.getUserByEmail(loginDto.email)
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.password
    )
    if (validPassword) return user
    throw new UnauthorizedException('User not found');
  }
  
  private async generateToken(user: User) {
    const payload = {email: user.email, id: user.id, roles: user.roles}
    return {token: this.jwtService.sign(payload)}
  }
}
