import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionaryDto {
  @IsString()
  @IsOptional()
  public recomendation: string;

  @IsString()
  @IsOptional()
  public hobby: string;

  @IsString()
  @IsOptional()
  public workExperience: string;

  @IsString()
  @IsOptional()
  public comment: string;
}

export class CreateQuestionaryDto extends UpdateQuestionaryDto {
  @IsString()
  @IsNotEmpty()
  public email: string;
}
