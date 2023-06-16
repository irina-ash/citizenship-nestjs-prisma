import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  public email: string;

  @IsNumber()
  @IsOptional()
  public cityId: number;
}
