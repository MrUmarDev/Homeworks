import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsUppercase} from 'class-validator'

export class UpdateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'ROLE NAME'})
    @IsNotEmpty()
    @IsUppercase()
    @IsString()
    readonly value?: string;

    @ApiProperty({example: 'Bu admin', description: 'information about role'})
    @IsNotEmpty()
    @IsString()
    readonly description?: string;
}