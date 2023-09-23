import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMachineDriverDto {
  @IsNumber()
  @IsNotEmpty()
  machineId: number;

  @IsNumber()
  @IsNotEmpty()
  driverId: number;
}
