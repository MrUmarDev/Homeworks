import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsEmail, IsStrongPassword} from 'class-validator'

export class UpdateUserDto {
    @ApiProperty({example: 'user', description: 'User Name'})
    @IsNotEmpty()
    @IsString()
    readonly name?: string;


    @ApiProperty({example: 'user@gmail.com', description: 'User email'})
    @IsEmail()
    readonly email?: string;

    @ApiProperty({example: 'Qwerty!2345', description: 'User password'})
    @IsStrongPassword()
    readonly password?: string;
}
