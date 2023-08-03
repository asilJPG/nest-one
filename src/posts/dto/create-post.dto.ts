import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly content: string;

  @Type(() => Number)
  readonly userId: number;
}
