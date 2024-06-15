import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  // @IsEnum(['Yes', 'No'], {
  //   message: 'Must be either a yes or no',
  // })
  // book: 'Yes' | 'No';
}
