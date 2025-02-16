import { Body, Controller, HttpCode, HttpStatus, Post, UploadedFile } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApiUploadFile } from 'src/shared/decorators/swaggers/api-upload-file.decorator';
import { HttpRequestContextService } from 'src/shared/modules/http-request-context/http-request-context.service';

import { CreateExampleRequestDto } from './dtos/create-example-request.dto';
import { CreateExampleResponseDto } from './dtos/create-example-response.dto';
import { FormDataUploadDto } from './dtos/formdata-upload-request.dto';
import { ExampleService } from './example.service';

@Controller('example')
@ApiTags('Example')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService,
    private readonly httpContext: HttpRequestContextService
  ) {}

  @Post('/new')
  @ApiCreatedResponse({ type: CreateExampleResponseDto })
  async createExample(@Body() createExampleDto: CreateExampleRequestDto) {
    const newExample: CreateExampleResponseDto = await this.exampleService.createExample(createExampleDto);
    return newExample;
  }
  @Post('/upload')
  @HttpCode(HttpStatus.OK)
  @ApiUploadFile(FormDataUploadDto)
  async upload(@Body() formData: FormDataUploadDto, @UploadedFile() file: Express.Multer.File) {
    await this.exampleService.upload(formData, file);
    return 'oke';
  }
}
