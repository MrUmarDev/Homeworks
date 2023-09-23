import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  driver_licence: string;
}
