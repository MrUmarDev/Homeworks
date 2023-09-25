import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class loginDto {
  @ApiProperty({
    example: "User@gmail.com",
    description: "Foydalanuvchi email",
  })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: "Qwert1245!!#", description: "Foydalanuvchi paroli" })
  @IsStrongPassword({ minLength: 6 })
  readonly password: string;
}
