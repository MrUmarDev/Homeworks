import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBuilderDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  birth_day: Date;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsNumber()
  @IsNotEmpty()
  companyId: number;
}
