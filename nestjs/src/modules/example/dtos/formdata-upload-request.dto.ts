import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FormDataUploadDto {
  @ApiProperty()
  @IsString()
  id: string;
}
