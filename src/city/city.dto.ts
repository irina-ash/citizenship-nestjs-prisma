import { User } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class ReturnCityDto {
  public id: number;
  public name: string;
  public title: string;
  public value: string;
  public users?: User[];
}

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsOptional()
  public value: string;

  @IsString()
  @IsOptional()
  public timezone: string;

  @IsNumber()
  @IsOptional()
  public regionId: number;

  @IsNumber()
  @IsOptional()
  public countryId: number;
}

export class UpdateCityDto {
  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsOptional()
  public title: string;

  @IsString()
  @IsOptional()
  public value: string;

  @IsString()
  @IsOptional()
  public timezone: string;

  @IsNumber()
  @IsOptional()
  public regionId: number;

  @IsNumber()
  @IsOptional()
  public countryId: number;
}
