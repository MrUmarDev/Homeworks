import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMachineDto {
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  companyId:number;
}
