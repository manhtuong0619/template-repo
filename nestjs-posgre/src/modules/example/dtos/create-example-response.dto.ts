import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;
}
